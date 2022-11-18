import { Position, TeamMember } from "@prisma/client";
import { useEffect } from "react";

const TeamMemberCard = ({
  member,
}: {
  member: TeamMember & { position: Position[] };
}) => {
  const imageUrl = `/api/profilePicture/${member.id}`;

  useEffect(() => {
    const element = document.getElementById(`${member.id}`);
    if (element) {
      element.style.backgroundImage = `url(${imageUrl})`;
    }
  });

  return <div className="aspect-square h-auto w-full rounded-2xl"></div>;
};

export default TeamMemberCard;
