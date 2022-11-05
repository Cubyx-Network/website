import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import HeaderDropdown from "./HeaderDropdown";
import LoginUser from "../intern/LoginUser";

const Header = ({
  title,
  description,
  noIndex = false,
}: {
  title: string;
  description: string;
  noIndex?: boolean;
}) => {
  return <>
    <NextSeo
      title={`${title} | Cubyx Network`}
      description={description}
      noindex={noIndex}
    />
    <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between p-4">
      <Link href={"/"}>

        <div className="flex items-center gap-4 text-4xl hover:cursor-pointer">
          <Image
            src="/img/netzwerk.png"
            alt="CubyxNetwork Logo"
            width="70px"
            height="70px"
          />
          <h1 className="m-0 hidden font-bold md:block">Cubyx Network</h1>
        </div>

      </Link>

      {
        //ToDo: Add Burger Menu for Mobile
      }
      <div className="hidden items-center gap-4 lg:flex">
        <HeaderLink link={"/"}>Home</HeaderLink>
        <HeaderLink link={"/projekte"}>Projekte</HeaderLink>
        <HeaderLink link={"/team"}>Teamübersicht</HeaderLink>
        <HeaderDropdown link={"Partner"}>
          {[
            { href: "/partner/tts-craft", name: "TTS-Craft" },
            { href: "/partner/expansehost", name: "Expansehost" },
            { href: "/partner/greatnewsde", name: "GreatNewsDE" },
          ]}
        </HeaderDropdown>
        <LoginUser />
      </div>
    </header>
  </>;
};

export default Header;
