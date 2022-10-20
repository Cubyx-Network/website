import { TeamMember } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { userFromRequest } from "../../services/jwt";
import superjson from "superjson";
import Login from "../../components/Login";
import InternHeader from "../../components/intern/InternHeader";

type Props = {
  user: TeamMember;
};

const AdminPage = ({ user }: Props) => {
  if (!user) return <Login />;

  return (
    <>
      <InternHeader
        title={"Intern"}
        description={"Interner Bereich"}
        user={user}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center gap-16"></div>
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
