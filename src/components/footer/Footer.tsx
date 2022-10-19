import Image from "next/image";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-8">
      <div className="flex w-5/6 items-center justify-between">
        <section className="flex items-center gap-8">
          <Image
            src="/img/netzwerk.png"
            alt="CubyxNetwork Logo"
            width="256px"
            height="256px"
          />
          <div>
            <h2 className="text-4xl font-extrabold">Cubyx Network</h2>
            <span>Dein demokratisches Bauteam aus Deutschland!</span>
          </div>
        </section>
      </div>
      <div className="flex w-5/6 items-center justify-between">
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
        <p>
          (c) {new Date().getFullYear()} Cubyx Team・Quadratisch. Praktisch.
          Gut.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
