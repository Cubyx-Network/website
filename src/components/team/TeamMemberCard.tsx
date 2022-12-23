import { Position, TeamMember } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "../icon/Icon";
import PositionTag from "./PositionTag";

const IconWithText = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon name={icon} className="self-start" />
      <span>{text}</span>
    </div>
  );
};

const TeamMemberCard = ({
  member,
}: {
  member: TeamMember & { position: Position[] };
}) => {
  const isAdmin = member.isAdmin;
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileTap={{ scale: 1.05 }}
      className={
        "min-h-full max-w-xs rounded-2xl bg-background-secondary p-4 shadow-xl dark:bg-background-secondary-dark" +
        (isAdmin ? " border-2 border-text-secondary" : "")
      }
    >
      <Image
        src={member.profile_picture || "/img/netzwerk.png"}
        alt={`${member.username} profilbild`}
        width={1000}
        height={1000}
        className={"aspect-square rounded-2xl"}
      />
      <div className="mt-2">
        <h2 className="text-xl font-bold">{member.username}</h2>
        <IconWithText icon={"discord-fill"} text={member.discord_tag} />

        {member.email && (
          <IconWithText icon={"mail-fill"} text={member.email} />
        )}

        {member.youtube_username && (
          <IconWithText icon={"youtube-fill"} text={member.youtube_username} />
        )}

        {member.twitch_username && (
          <IconWithText icon={"twitch-fill"} text={member.twitch_username} />
        )}

        {member.mastodon_username && (
          <IconWithText
            icon={"mastodon-fill"}
            text={member.mastodon_username}
          />
        )}

        {member.github_username && (
          <IconWithText icon={"github-fill"} text={member.github_username} />
        )}

        {member.reddit_username && (
          <IconWithText icon={"reddit-fill"} text={member.reddit_username} />
        )}

        <ul className="my-2 flex flex-wrap gap-2">
          {member.position.map((position) => (
            <li key={position.id}>
              <PositionTag position={position.positionType} />
            </li>
          ))}
        </ul>
        {member.description && (
          <IconWithText icon={"information-fill"} text={member.description} />
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
