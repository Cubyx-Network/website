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

        <h2 className="mt-8 text-center text-2xl font-extrabold">
          Ehemalige Teammitglieder
        </h2>
        <section className="flex justify-center">
          <ul className="mt-4 grid justify-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((t) => t.isInactive)
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
