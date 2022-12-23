import Image from "next/image";
import SocialIcon from "./SocialIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import redaxios from "redaxios";

const Footer = () => {
  const [version, setVersion] = useState("0.0.0");

  useEffect(() => {
    redaxios.get("/api/version").then((res) => {
      res.data && setVersion(res.data.version);
    });
  });

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
              <SocialIcon icon={"discord-fill"} link={"/discord"} />
              <SocialIcon icon={"twitch-fill"} link={"/twitch"} />
              <SocialIcon icon={"youtube-fill"} link={"/youtube"} />
              <SocialIcon icon={"reddit-fill"} link={"/reddit"} />
              <SocialIcon icon={"mastodon-fill"} link={"/mastodon"} />
              <SocialIcon icon={"earth-fill"} link={"/planetmc"} />
              <SocialIcon icon={"spotify-fill"} link={"/anchor"} />
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
        <div className="mb-4 flex w-full flex-wrap items-center justify-center gap-4 p-2 text-text-third">
          <Link href={"/impressum"}>Impressum</Link>

          <span>•</span>

          <Link href={"/datenschutz"}>Datenschutz</Link>

          <span>•</span>

          <Link href={"https://status.cubyx.eu"} target="_blank">
            Netzwerk-Status
          </Link>

          <span>•</span>

          <span>Version: {version}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
