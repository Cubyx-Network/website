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
              width="256"
              height="256"
            />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold">Cubyx Network</h2>
            <span>Dein demokratisches Bauteam aus Deutschland!</span>
            <div className="flex gap-2">
              <SocialIcon icon={"discord-fill"} link={"/r/discord"} />
              <SocialIcon icon={"twitch-fill"} link={"/r/twitch"} />
              <SocialIcon icon={"youtube-fill"} link={"/r/youtube"} />
              <SocialIcon icon={"reddit-fill"} link={"/r/reddit"} />
              <SocialIcon icon={"mastodon-fill"} link={"/r/mastodon"} />
              <SocialIcon icon={"earth-fill"} link={"/r/planetmc"} />
              <SocialIcon icon={"spotify-fill"} link={"/r/anchor"} />
            </div>
          </div>
        </section>
      </div>

      <div>
        <p className="mt-4 p-4 text-center font-semibold">
          (c) {new Date().getFullYear()}{" "}
          <span className="gradient">Cubyx Network</span>
          ・Quadratisch. Praktisch. Gut.
        </p>
        <div className="mb-4 flex w-full items-center justify-center gap-4 text-text-third">
          <Link href={"/impressum"}>Impressum</Link>

          <span>•</span>

          <Link href={"/datenschutz"}>Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
