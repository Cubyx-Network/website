import Icon from "../icon/Icon";
import Link from "next/link";

const SocialIcon = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer me">
      <Icon name={icon} className="icon-2xl md:icon-3xl" />
    </Link>
  );
};

export default SocialIcon;
