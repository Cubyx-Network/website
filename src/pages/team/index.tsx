import superjson from "superjson";
import * as Buffer from "buffer";
import { Position, TeamMember } from "@prisma/client";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const TeamPage = ({
  teamMembers,
}: {
  teamMembers: (TeamMember & { position: Position[] })[];
}) => {
  const templateMember: TeamMember & { position: Position[] } = {
    id: "709dcf0a-4481-45f7-9687-5b2caf89477e",
    username: "Cubyx Teamübersicht",
    description:
      "Dies ist einer Übersicht über alle Teammitglieder. Um mehr über ein Teammitglied zu erfahren, wähle es in der linken Seitenleiste aus.",
    discord_tag: "Cubyx#0000",
    email: "cubyx.eu",
    createdAt: new Date(),
    isAdmin: false,
    profile_picture: Buffer.Buffer.from(""),
    mc_username: null,
    password: "",
    position: [],
  };

  const [selectedMember, setSelectedMember] = React.useState<
    TeamMember & { position: Position[] }
  >(templateMember);

  if (!teamMembers) return <LoadingSpinner />;

  return (
    <>
      <Header
        title={"Teamübersicht"}
        description={"Ein Überblick über das Cubyx Team"}
      />

      <main className="flex min-h-screen min-w-full items-center justify-center">
        <h1>Work in Progress...</h1>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  if (prisma) {
    const teamMembers = await prisma.teamMember.findMany({
      include: {
        position: true,
      },
    });

    return {
      props: superjson.serialize({ teamMembers }).json,
    };
  }
  return {
    props: {
      teamMembers: [],
    },
  };
};

export default TeamPage;
