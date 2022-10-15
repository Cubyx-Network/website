import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

const Header = ({
  title,
  description,
  noIndex = false,
}: {
  title: string;
  description: string;
  noIndex?: boolean;
}) => {
  return (
    <>
      <NextSeo
        title={`${title} | Cubyx Network`}
        description={description}
        noindex={noIndex}
      />
      <div className="fixed top-0 left-0 z-40 flex w-full items-center justify-between p-4">
        <Link href={"/"}>
          <a href={"/"}>
            <div className="flex items-center gap-4 text-4xl hover:cursor-pointer">
              <Image
                src="/img/netzwerk.png"
                alt="CubyxNetwork Logo"
                width="70px"
                height="70px"
              />
              <h1 className="m-0 hidden font-bold md:block">Cubyx Network</h1>
            </div>
          </a>
        </Link>
        <div className="flex items-center gap-4">
          <HeaderLink link={"/"}>Home</HeaderLink>
          <HeaderLink link={"/intern"}>Intern</HeaderLink>
        </div>
      </div>
    </>
  );
};

export default Header;
