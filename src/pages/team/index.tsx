import superjson from "superjson";
import { Position, TeamMember } from "@prisma/client";
import React from "react";
import Footer from "../../components/footer/Footer";
import { prisma } from "../../lib/prisma";
import Header from "../../components/header/Header";

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
