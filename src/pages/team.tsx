import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TeamMemberCard from "../components/team/TeamMemberCard";
import { Position, TeamMember } from "@prisma/client";
import TeamMemberPage from "../components/team/TeamMemberPage";
import React from "react";
import { prisma } from "../lib/prisma";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import superjson from "superjson";
import * as Buffer from "buffer";

const TeamPage = ({
  teamMembers,
}: {
  teamMembers: (TeamMember & { position: Position[] })[];
}) => {
  const templateMember: TeamMember & { position: Position[] } = {
    id: "-1",
    username: "Cubyx Teamübersicht",
    description: "Lorem Ipsum dolor sit amet.",
    discord_tag: "Cubyx#0000",
    email: "cubyx.eu",
    createdAt: new Date(),
    role: "owner",
    profile_picture: Buffer.Buffer.from(""),
    mc_username: null,
    password: "123456",
    position: [{ id: "1", positionType: "developer" }],
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

      <main className="hidden h-screen w-full items-center gap-4 p-8 lg:flex">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-background-secondary p-6 dark:bg-background-secondary-dark">
          <h2 className="text-xl font-semibold">Teammitglieder</h2>
          <ul className="flex flex-col gap-2">
            {teamMembers.map((member) => (
              <li onClick={() => setSelectedMember(member)} key={member.id}>
                <TeamMemberCard member={member} />
              </li>
            ))}
          </ul>
        </div>

        <div className={"flex w-full justify-center"}>
          <TeamMemberPage
            member={selectedMember}
            isTemplate={selectedMember.id === "-1" && true}
          />
        </div>
      </main>

      <main className="flex h-screen w-full items-center justify-center p-8 lg:hidden">
        <h1 className="text-center font-black">
          Die Teamübersicht wird momentan noch nicht auf mobilen Endgeräten
          unterstützt! Wir bitten um Verständnis
        </h1>
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
