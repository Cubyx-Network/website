import { Position, TeamMember } from "@prisma/client";
import Icon from "../icon/Icon";
import Image from "next/image";
import PositionTag from "./PositionTag";

const TeamMemberPage = ({
  member,
  isTemplate = false,
}: {
  member: TeamMember & { position: Position[] };
  isTemplate?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="flex items-center gap-48">
        <div>
          <h2 className="text-4xl font-extrabold">{member.username}</h2>
          <div className="flex items-center gap-2 text-text-third">
            <Icon name={"discord-fill"} />
            <span>{member.discord_tag}</span>
          </div>
          {member.mc_username && (
            <div className="flex items-center gap-2 text-text-third">
              <Icon name={"gamepad-fill"} />
              <span>{member.mc_username}</span>
            </div>
          )}
          <ul className="mt-4 flex flex-col gap-2">
            {member.position.map((position) => (
              <PositionTag position={position.positionType} key={position.id} />
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={
              !isTemplate
                ? `/api/profilePicture/${member.id}`
                : "/img/netzwerk.png"
            }
            alt={`${member.username} profile picture`}
            width="300px"
            height="300px"
            className={"rounded-full"}
          />
        </div>
      </section>
      <section className="w-full">
        <p className="max-w-3xl">{member.description}</p>
      </section>
    </div>
  );
};

export default TeamMemberPage;
