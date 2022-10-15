import { Candidate, Election, User, Vote } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { userFromRequest } from "../../services/jwt";
import superjson from "superjson";
import prisma from "../../lib/prisma";
import ElectionItem from "../../components/intern/ElectionItem";
import Login from "../../components/Login";
import InternHeader from "../../components/intern/InternHeader";

type Props = {
  user: User;
  elections: (Election & {
    votes: Vote[];
    candidates: (Candidate & { user: User })[];
  })[];
};

const InternPage = ({ user, elections }: Props) => {
  if (!user) return <Login />;

  const time = new Date();
  let greeting = "Guten Tag, "; // ☀️

  if (time.getHours() < 12) {
    greeting = "Guten Morgen, ️"; // ☕
  } else if (time.getHours() < 13) {
    greeting = "Mahlzeit, "; // 🍔
  } else if (time.getHours() > 17) {
    greeting = "Guten Abend, "; // 🌙
  } else if (time.getHours() > 21) {
    greeting = "Gute Nacht, "; // 💤
  }

  return (
    <>
      <InternHeader
        title={"Intern"}
        description={"Interner Bereich"}
        user={user}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
        <div className="hidden w-full md:block">
          <h1 className="text-center text-7xl font-bold ">
            {greeting} <span className="color-secondary">{user.username}</span>.
          </h1>
          <div className="mt-8 flex h-0.5 justify-center rounded-3xl">
            <div className="bg-text w-1/4"></div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <section className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold">Aktuelle Wahlen</h1>
            {!elections || elections.length === 0 ? (
              <p className="color-third mt-4">Aktuell gibt es keine Wahlen</p>
            ) : (
              <div className="mt-4">
                {elections.map((election) => (
                  <ElectionItem
                    election={election}
                    user={user}
                    key={election.id}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await userFromRequest(context.req);

  if (!user) return { props: {} };

  const elections = await prisma.election.findMany({
    where: {
      endsAt: {
        gt: new Date(),
      },
    },
    include: {
      votes: true,
      candidates: {
        include: {
          user: true,
        },
      },
    },
  });

  return {
    props: superjson.serialize({
      user,
      elections,
    }).json,
  };
}

export default InternPage;
