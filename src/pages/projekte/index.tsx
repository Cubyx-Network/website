import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import styles from "./Projects.module.css";
import { prisma } from "../../lib/prisma";
import superjson from "superjson";
import { Project, TeamMember } from "@prisma/client";
import ProjectCard from "../../components/projects/ProjectCard";

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

      <div
        className={
          styles.hero + " " + "flex h-96 w-full items-center justify-center"
        }
      >
        <h1 className="text-center text-6xl font-extrabold">Unsere Projekte</h1>
      </div>

      <main className="flex w-full flex-col items-center gap-8 p-8">
        <h2 className="text-3xl font-bold">Aktuelle Projekte</h2>
        <div className="flex w-full flex-wrap justify-center gap-4">
          {projects
            .filter((p) => new Date(p.releaseDate).getTime() > Date.now())
            .map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </div>
        <h2 className="text-3xl font-bold">Abgeschlossene Projekte</h2>
        <div className="flex w-full justify-center gap-4">
          {projects
            .filter((p) => new Date(p.releaseDate).getTime() < Date.now())
            .map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </div>
      </main>
      <Footer />
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
