import Image from "next/image";
import SocialIcon from "./SocialIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-8">
      <div className="flex w-5/6 items-center justify-between">
        <section className="flex items-center gap-8">
          <div className="hidden lg:block">
            <Image
              src="/img/netzwerk.png"
              alt="CubyxNetwork Logo"
              width="256px"
              height="256px"
            />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold">Cubyx Network</h2>
            <span>Dein demokratisches Bauteam aus Deutschland!</span>
            <div className="flex gap-2">
              <SocialIcon icon={"discord-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"twitch-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"twitter-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"youtube-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"github-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"reddit-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"mastodon-fill"} link={"https://discord.gg/"} />
              <SocialIcon icon={"earth-fill"} link={"https://discord.gg/"} />
            </div>
          </div>
        </section>
      </div>

      <div>
        <p className="mt-4 p-4 text-center font-semibold">
          (c) {new Date().getFullYear()}{" "}
          <span className="text-text-secondary">Cubyx Network</span>
          ・Quadratisch. Praktisch. Gut.
        </p>
        <div className="mb-4 flex w-full items-center justify-center gap-4 text-text-third">
          <Link href={"/impressum"}>
            <a href={"/impressum"}>Impressum</a>
          </Link>

          <span>•</span>

          <Link href={"/datenschutz"}>
            <a href={"/datenschutz"}>Datenschutz</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
