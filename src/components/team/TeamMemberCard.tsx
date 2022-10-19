import { TeamMember } from "@prisma/client";
import CubyxImage from "../CubyxImage";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex w-60 items-center gap-2 rounded-2xl border border-text-primary p-2 transition-all hover:translate-x-4 hover:cursor-pointer dark:border-text-primary-dark">
      <CubyxImage
        src={`/api/profilePicture/${member.id}`}
        alt={`${member.username} profile picture`}
        className="h-10 w-10"
      />
      <h3 className="text-xl">{member.username}</h3>
    </div>
  );
};

export default TeamMemberCard;
