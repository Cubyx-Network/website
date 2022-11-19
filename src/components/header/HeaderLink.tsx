import Link from "next/link";
import { useRouter } from "next/router";

const HeaderLink = ({ link, children }: { link: string; children: any }) => {
  const isCurrentSite = useRouter().pathname === link;

  return (
    <Link href={link}>
      <h2 className={`m-0 text-xl ${isCurrentSite && "gradient"}`}>
        {children}
      </h2>
    </Link>
  );
};

export default HeaderLink;
