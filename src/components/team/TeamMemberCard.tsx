import { TeamMember } from "@prisma/client";
import Image from "next/image";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex w-60 items-center gap-2 rounded-2xl border border-text-primary p-2 transition-all hover:translate-x-4 hover:cursor-pointer dark:border-text-primary-dark">
      <Image
        src={`/api/profilePicture/${member.id}`}
        alt={`${member.username} profile picture`}
        className="h-10 w-10"
        width={100}
        height={100}
      />
      <h3 className="text-xl">{member.username}</h3>
    </div>
  );
};

export default TeamMemberCard;
