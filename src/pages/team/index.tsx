import superjson from "superjson";
import { Position, TeamMember } from "@prisma/client";
import React from "react";
import Footer from "../../components/footer/Footer";
import { prisma } from "../../lib/prisma";
import Header from "../../components/header/Header";
import TeamMemberCard from "../../components/team/TeamMemberCard";

const TeamPage = ({
  teamMembers,
}: {
  teamMembers: (TeamMember & { position: Position[] })[];
}) => {
  return (
    <>
      <Header
        title={"Teamübersicht"}
        description={"Ein Überblick über das Cubyx Team"}
      />

      <main className="py-48">
        <h1 className="text-center text-6xl font-extrabold">Das Cubyx Team</h1>
        <section className="flex justify-center">
          <ul className="mt-8 grid justify-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {teamMembers
              .filter((t) => !t.isInactive)
              .map((teamMember) => (
                <li key={teamMember.id}>
                  <TeamMemberCard member={teamMember} />
                </li>
              ))}
          </ul>
        </section>
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
      orderBy: {
        createdAt: "asc",
      },
    });

    const noxus = teamMembers.filter((t) => t.isAdmin);
    const team = teamMembers.filter((t) => !t.isAdmin);

    return {
      props: superjson.serialize({ teamMembers: [...noxus, ...team] }).json,
    };
  }
  return {
    props: {
      teamMembers: [],
    },
  };
};

export default TeamPage;
