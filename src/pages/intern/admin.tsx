import { TeamMember } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { userFromRequest } from "../../services/jwt";
import superjson from "superjson";
import Login from "../../components/Login";
import InternHeader from "../../components/intern/InternHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import redaxios from "redaxios";

type Props = {
  user: TeamMember;
};

export type RegisterParams = {
  username: string;
  email: string;
};

const AdminPage = ({ user }: Props) => {
  const [registrationLink, setRegistrationLink] = useState<string | null>(null);
  const [registrationUsername, setRegistrationUsername] = useState<
    string | null
  >(null);
  const [registrationEmail, setRegistrationEmail] = useState<string | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (user && !user.isAdmin) {
      router.push("/intern");
    }
  });

  if (!user) return <Login />;

  function onRegister() {
    if (!registrationUsername || !registrationEmail) {
      setRegistrationLink("Bitte fülle alle Felder aus!");
      return;
    }

    if (!registrationEmail.endsWith("@cubyx.eu")) {
      setRegistrationLink("Die E-Mail muss eine Cubyx E-Mail sein!");
      return;
    }

    redaxios
      .post("/api/createRegisterLink", {
        username: registrationUsername,
        email: registrationEmail,
      })
      .then((r) => {
        if (r.status === 200) {
          setRegistrationLink(`${window.location.origin}/register/${r.data}`);
        }
      })
      .catch((e) => {
        setRegistrationLink(`${e.status} ${e.statusText}`);
      });
  }

  return (
    <>
      <InternHeader
        title={"Intern"}
        description={"Interner Bereich"}
        user={user}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
        <form className="flex gap-2">
          <input
            type="text"
            className="input"
            placeholder="Username"
            onChange={(e) => setRegistrationUsername(e.target.value)}
          />
          <input
            type="email"
            className="input"
            placeholder="E-Mail (@cubyx.eu)"
            onChange={(e) => setRegistrationEmail(e.target.value)}
          />
          <input
            type="button"
            className="input hover:cursor-pointer"
            value="Erstellen"
            onClick={onRegister}
          />
        </form>
        <output>{registrationLink}</output>
      </div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await userFromRequest(context.req);

  if (!user) return { props: {} };

  return {
    props: superjson.serialize({
      user,
    }).json,
  };
}

export default AdminPage;
