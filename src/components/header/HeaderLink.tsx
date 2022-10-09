import Link from "next/link";

const HeaderLink = ({ link, children }: { link: string; children: any }) => {
  const isCurrentSite = window.location.pathname === link;

  return (
    <Link href={link}>
      <a href={link}>
        <h1 className={`m-0 text-xl ${isCurrentSite && "color-secondary"}`}>
          {children}
        </h1>
      </a>
    </Link>
  );
};

export default HeaderLink;
