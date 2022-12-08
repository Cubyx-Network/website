import Header from "../../components/header/Header";
import React from "react";
import { prisma } from "../../lib/prisma";
import superjson from "superjson";
import { Project, TeamMember } from "@prisma/client";

const ProjectPage = ({
  projects,
}: {
  projects: (Project & { authors: TeamMember[] })[];
}) => {
  return (
    <>
      <Header
        title={"Projekte"}
        description={"Hier findest du alle Projekte von Cubyx!"}
      />

      <main className="flex h-screen w-full flex-col items-center gap-8 overflow-x-auto p-8 pt-48">
        <div className="flex w-full flex-col gap-8 2xl:w-3/4">
          <h1 className="text-center text-6xl font-extrabold">
            Unsere Projekte
          </h1>
          {/* <div className="flex w-full flex-wrap justify-center gap-4">*/}
          {/*  {projects*/}
          {/*    .sort((a, b) => {*/}
          {/*      return (*/}
          {/*        new Date(b.releaseDate).getTime() -*/}
          {/*        new Date(a.releaseDate).getTime()*/}
          {/*      );*/}
          {/*    })*/}
          {/*    .map((project) => (*/}
          {/*      <ProjectCard project={project} key={project.id} />*/}
          {/*    ))}*/}
          {/*</div>*/}

          <div className="flex w-full flex-wrap justify-center gap-4">
            <span className="text-red-500">
              Leider haben wir dies nicht mehr geschafft :( <br />
              Die Projekte Seiten werden mit der Version 1.1.0 nachgereicht
            </span>
          </div>
        </div>
        {/*<Footer />*/}
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  if (prisma) {
    const projects = await prisma.project.findMany({
      include: {
        authors: true,
      },
    });

    return {
      props: superjson.serialize({ projects }).json,
    };
  }
  return {
    props: {
      projects: [],
    },
  };
};

export default ProjectPage;
