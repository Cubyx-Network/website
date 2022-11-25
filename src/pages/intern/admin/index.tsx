import { TeamMember } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { userFromRequest } from "../../../services/jwt";
import superjson from "superjson";
import Login from "../../../components/Login";
import InternHeader from "../../../components/intern/InternHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import redaxios from "redaxios";
import { prisma } from "../../../lib/prisma";

type Props = {
  user: TeamMember;
  users: TeamMember[];
};

export type RegisterParams = {
  username: string;
  email: string;
};

const AdminPage = ({ user, users }: Props) => {
  const [registrationLink, setRegistrationLink] = useState<string | null>(null);
  const [registrationUsername, setRegistrationUsername] = useState<
    string | null
  >(null);
  const [registrationEmail, setRegistrationEmail] = useState<string | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);
  const [deleteUserError, setDeleteUserError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (user && !user.isAdmin) {
      router.push("/intern");
    }
  });

  if (!user) return <Login />;

  async function onRegister() {
    setIsLoading(true);
    setRegistrationLink(null);

    if (!registrationUsername || !registrationEmail) {
      setRegistrationLink("Bitte fülle alle Felder aus!");
      setIsLoading(false);
      return;
    }

    if (!registrationEmail.endsWith("@cubyx.eu")) {
      setRegistrationLink("Die E-Mail muss eine Cubyx E-Mail sein!");
      setIsLoading(false);
      return;
    }

    const userExist = await redaxios
      .get(`/api/userExist/${registrationUsername}`)
      .then((res) => {
        if (res.status === 200) {
          const response = {
            user: res.data.user,
            pterodactyl: res.data.pterodactyl,
            mailcow: res.data.mailcow,
            registration: res.data.registration,
          };
          setRegistrationLink(
            `Der Nutzer existiert bereits! (Cubyx: ${response.user}, Pterodactyl: ${response.pterodactyl}, Mailcow: ${response.mailcow}, Registrierung: ${response.registration})`
          );
          return true;
        }
      })
      .catch(() => {
        return false;
      })
      .finally(() => {
        return false;
      });

    if (userExist) {
      setIsLoading(false);
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

    setIsLoading(false);
  }

  function removeUser(userId: string) {
    setDeleteUserError(null);
    redaxios.delete(`/api/user/delete/${userId}`).then((r) => {
      if (r.status === 200) {
        if (r.data.mailcow) {
          setDeleteUserError(
            "Die Mailcow-Mailbox konnte nicht gelöscht werden! Bitte manuell löschen."
          );
        } else if (r.data.pterodactyl) {
          setDeleteUserError(
            "Der Pterodactyl-Account konnte nicht gelöscht werden! Bitte manuell löschen."
          );
        } else {
          router.reload();
        }
      }
    });
  }

  return (
    <>
      <InternHeader
        title={"Intern"}
        description={"Interner Bereich"}
        user={user}
      />

      <div className="grid h-screen w-full grid-cols-2 flex-col items-center justify-items-center gap-16">
        <section>
          <h2 className="text-2xl">Neuen Nutzer registrieren</h2>
          <form className="mt-2 flex gap-2">
            <input
              type="text"
              className="input"
              placeholder="Username"
              onChange={(e) => {
                setRegistrationUsername(e.target.value);
                setRegistrationEmail(
                  `${(e.target.value || "").toLowerCase()}@cubyx.eu`
                );
              }}
            />
            <input
              type="email"
              className="input"
              placeholder="E-Mail (@cubyx.eu)"
              onChange={(e) => setRegistrationEmail(e.target.value)}
              value={registrationEmail || ""}
            />

            <input
              type="button"
              className="input hover:cursor-pointer"
              value={!isLoading ? "Erstellen" : "Lädt..."}
              disabled={isLoading}
              onClick={onRegister}
            />
          </form>
          <output>{registrationLink}</output>
        </section>

        <section>
          <h2 className="text-2xl">Registrierte Nutzer</h2>
          <table className="mt-2 overflow-auto rounded-xl bg-background-secondary dark:bg-background-secondary-dark">
            <thead>
              <tr>
                <th className="p-4">Username</th>
                <th className="p-4">E-Mail</th>
                <th className="p-4">Registriert</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {new Date(user.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <input
                      type="button"
                      className="input hover:cursor-pointer"
                      value="Löschen"
                      onClick={() => removeUser(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <output className="mt-2 text-red-500">{deleteUserError}</output>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await userFromRequest(context.req);

  if (!user) return { props: {} };

  const users = await prisma.teamMember.findMany();

  return {
    props: superjson.serialize({
      user,
      users,
    }).json,
  };
}

export default AdminPage;
