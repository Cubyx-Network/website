import Login from "../../components/login/Login";
import { Election, User } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { userFromRequest } from "../../services/jwt";
import superjson from "superjson";
import prisma from "../../lib/prisma";
import Header from "../../components/header/Header";
import redaxios from "redaxios";

type Props = {
  user: User;
  elections: Election[];
};

function onClick() {
  redaxios.delete("/api/sessions").then((r) => {
    if (r.status === 200) {
      window.location.href = "/";
    }
  });
}

const InternPage = ({ user }: Props) => {
  if (!user) return <Login />;

  return (
    <>
      <Header
        title={"Intern"}
        description={"Interner Bereich"}
        noIndex={true}
      />

      <div className="flex h-screen w-full items-center">
        <input
          type={"button"}
          onClick={onClick}
          value={"Logout"}
          className={"input"}
        />
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
  });

  return {
    props: superjson.serialize({
      user,
      elections,
    }).json,
  };
}

export default InternPage;
