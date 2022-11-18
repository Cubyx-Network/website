import { Project, TeamMember } from "@prisma/client";
import Icon from "../icon/Icon";
import { useEffect } from "react";
import Link from "next/link";

const ProjectCard = ({
  project,
}: {
  project: Project & { authors: TeamMember[] };
}) => {
  const imageUrl = project.image_url || "/img/netzwerk.png";

  useEffect(() => {
    const element = document.getElementById(`${project.id}`);
    if (element) {
      element.style.backgroundImage = `url(${imageUrl})`;
    }
  });

  return (
    <Link
      className="flex h-96 w-96 items-end justify-end rounded-lg bg-cover bg-center p-4 shadow-xl hover:cursor-pointer"
      id={project.id}
      href={`/projekte/${project.id}`}
    >
      <div className="h-22 flex w-52 flex-col flex-wrap items-end justify-end rounded-lg bg-background-secondary bg-opacity-80 p-2 dark:bg-background-secondary-dark">
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <div className="flex gap-1">
          <Icon name={"calendar-line"} />
          <span>{new Date(project.releaseDate).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
