import Icon from "../icon/Icon";

const SocialIcon = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon name={icon} className="icon-2xl md:icon-3xl" />
    </a>
  );
};

export default SocialIcon;
