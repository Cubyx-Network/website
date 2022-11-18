import Link from "next/link";
import { useRouter } from "next/router";

const HeaderLink = ({ link, children }: { link: string; children: any }) => {
  const isCurrentSite = useRouter().pathname === link;

  return (
    <Link href={link}>
      <h1 className={`m-0 text-xl ${isCurrentSite && "gradient"}`}>
        {children}
      </h1>
    </Link>
  );
};

export default HeaderLink;
