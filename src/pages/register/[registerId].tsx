import { RegisterParams } from "../intern/admin";
import { GetServerSideProps } from "next";
import InternHeader from "../../components/intern/InternHeader";
import { prisma } from "../../lib/prisma";
import InputElement from "../../components/InputElement";
import React, { useState } from "react";
import Image from "next/image";
import redaxios from "redaxios";
import { useRouter } from "next/router";

const RegistrationByIdPage = ({
  registration,
}: {
  registration: RegisterParams | null;
}) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { registerId } = useRouter().query;

  if (!registration) return <div>Der Link ist ungültig!</div>;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.target as HTMLFormElement;

    let profilePicture: Buffer | null = null;
    const profilePictureFile = form[4] as HTMLInputElement;

    if (profilePictureFile.files && profilePictureFile.files[0]) {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(profilePictureFile.files[0]);
      fileReader.onload = () => {
        profilePicture = Buffer.from(fileReader.result as string, "binary");
        submitRegistration(form, profilePicture);
      };
    }

    submitRegistration(form, null);
  }

  function submitRegistration(
    form: HTMLFormElement,
    profilePicture: Buffer | null
  ) {
    const data = {
      password: (form[0] as HTMLInputElement).value,
      password_wdh: (form[1] as HTMLInputElement).value,
      discord_tag: (form[2] as HTMLInputElement).value,
      mc_username: (form[3] as HTMLInputElement).value,
      profile_picture: profilePicture,
    };

    if (data.password !== data.password_wdh) {
      setError("Die Passwörter stimmen nicht überein!");
      return;
    }

    if (
      !data.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/
      )
    ) {
      setError(
        "Das Passwort muss mindestens 10 Zeichen lang sein, 1 Großbuchstabe, 2 Zahlen, 2 Sonderzeichen und 1 Kleinbuchstabe enthalten!"
      );
      return;
    }

    if (!data.discord_tag.match(/^.{3,}#\d{4}$/)) {
      setError("Der Discord Tag ist ungültig!");
      return;
    }

    redaxios.post("/api/register/" + registerId, data).then((r) => {
      if (r.status === 200) {
        window.location.href = "/intern";
      }
    });
  }

  return (
    <>
      <InternHeader
        title={`Registrierung von ${registration.username}`}
        description={`Internes Registrierungsportal des Cubyx Teams`}
      />

      <main className="flex h-screen w-full items-center justify-center gap-8 p-24">
        <section className="flex w-1/2 justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold">
              Registrierung von {registration.username}
            </h1>
            <span className="text-2xl text-text-third">
              {registration.email}
            </span>
            <span className="text-xl">
              Bitte fülle alle Felder aus, damit das System deinen Account
              erstellen kann. <br />
              Hinweise zum Datenschutz bei Cubyx findest du{" "}
              <a href="/datenschutz" className="text-text-third">
                hier
              </a>
              .
            </span>
          </div>
        </section>

        <form
          className="flex flex-col justify-center gap-16"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-4">
            <section className="flex flex-col gap-4">
              <InputElement
                value={"Passwort"}
                id={"password"}
                type="password"
                required
              />
              <InputElement
                value={"Passwort Wiederholen"}
                id={"password_wdh"}
                type="password"
                required
              />
              <InputElement
                value={"Discord Tag"}
                id={"discord"}
                type="text"
                required
              />
              <InputElement
                value={"Minecraft Username (optional)"}
                id={"minecraft"}
                type="text"
              />
            </section>
            <section className="flex flex-col items-center">
              <Image
                src={profilePicture || "/img/netzwerk.png"}
                alt={"profilbild"}
                width={"256"}
                height={"256"}
                className={"rounded-full"}
              />
              <InputElement
                value={"Profilbild"}
                id={"profile_picture"}
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      setProfilePicture(reader.result as string);
                    };
                  }
                }}
                required
              />
            </section>
          </div>

          <input type={"submit"} className="input hover:cursor-pointer" />
          <span className="text-red-500">{error}</span>
        </form>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { registerId } = context.params as { registerId: string };

  if (!prisma) {
    return {
      props: {
        registration: null,
      },
    };
  }

  const registration = await prisma.registration.findUnique({
    where: {
      id: registerId,
    },
  });

  if (!registration) {
    return {
      props: {
        registration: null,
      },
    };
  }

  return {
    props: {
      registration: {
        username: registration.username,
        email: registration.email,
      },
    },
  };
};

export default RegistrationByIdPage;
