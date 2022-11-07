import { Project, TeamMember } from "@prisma/client";
import Image from "next/image";
import Icon from "../icon/Icon";

const ProjectCard = ({
  project,
}: {
  project: Project & { authors: TeamMember[] };
}) => {
  const imageUrl = project.image_url || "/img/netzwerk.png";

  return (
    <div className="group flex h-96 w-48 flex-col overflow-hidden rounded-lg bg-background-secondary shadow-xl transition-all duration-500 ease-in-out hover:w-96 hover:cursor-pointer dark:bg-background-secondary-dark">
      <div className="flex aspect-square h-1/2 w-96 items-center justify-center">
        <div className="h-full w-1/2 p-4">
          <Image
            src={imageUrl}
            alt={project.name + " thumbnail"}
            width={100}
            height={100}
            className="aspect-square h-full w-full rounded-lg"
          />
        </div>

        <div className="h-full w-1/2 p-4">
          <div className="flex h-1/2 gap-1">
            <Icon name={"user-fill"} />
            <ul className="flex flex-col overflow-y-auto">
              {project.authors.length > 0
                ? project.authors.map((author) => (
                    <li key={author.id}>{author.username}</li>
                  ))
                : "Ich konnte keine Autoren finden..."}
            </ul>
          </div>

          <div className="flex gap-1">
            <Icon name={"calendar-line"} />
            <span>{new Date(project.releaseDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="order-last h-1/2 w-full flex-wrap p-4">
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <p className="line-clamp-4">{project.description}</p>

        {project.download_link && (
          <a
            href={project.download_link}
            target="_blank"
            rel="noopener noreferrer"
            className="invisible flex w-fit gap-1 group-hover:visible"
          >
            <Icon name={"download-line"} />
            <span>Download</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
