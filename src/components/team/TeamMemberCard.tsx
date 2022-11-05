import { TeamMember } from "@prisma/client";
import Image from "next/image";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-text-primary p-2 transition-all hover:cursor-pointer dark:border-text-primary-dark md:w-60 md:hover:translate-x-4">
      <Image
        src={`/api/profilePicture/${member.id}`}
        alt={`${member.username} profile picture`}
        className="h-10 w-10 rounded-full"
        width={100}
        height={100}
      />
      <h3 className="hidden text-xl md:block">{member.username}</h3>
    </div>
  );
};

export default TeamMemberCard;
