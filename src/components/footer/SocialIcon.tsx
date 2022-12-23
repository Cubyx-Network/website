import Icon from "../icon/Icon";
import Link from "next/link";

const SocialIcon = ({
  icon,
  link,
  mastodon,
}: {
  icon: string;
  link: string;
  mastodon?: boolean;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel={`noreferrer${mastodon ? " me" : ""}`}
    >
      <Icon name={icon} className="icon-2xl md:icon-3xl" />
    </Link>
  );
};

export default SocialIcon;
