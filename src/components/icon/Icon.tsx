import "remixicon/fonts/remixicon.css";

export type Props = {
  name: string;
  className?: string;
};

const Icon = ({ name, className }: Props) => {
  return <i className={`ri-${name} ${className}`} />;
};

export default Icon;
