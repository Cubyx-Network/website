import type { NextPage } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";
import Image from "next/image";

import logo from "../../public/img/netzwerk.png";
import snowyHouses from "../../public/img/home/snowy_houses.png";
import tectaBridge from "../../public/img/home/tecta_bridge.jpg";
import Section from "../components/Section";
import { motion } from "framer-motion";
import Stats from "../components/stats/Stats";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Link href={"https://social.cubyx.eu/@CubyxNetwork"} rel="me" />

      <Header
        title={"Home"}
        description={"Willkommen auf dem Cubyx Network!"}
      />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex min-h-screen min-w-full grid-cols-2 flex-col place-items-center items-center justify-center gap-8 p-8 md:grid"
      >
        <h1 className="text-center text-5xl font-extrabold lg:text-6xl xl:text-7xl">
          Willkommen auf dem <br />{" "}
          <motion.span
            initial={{
              background: "linear-gradient(90deg, #23AB09 0%, #22F200 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            whileHover={{
              background: "linear-gradient(0deg, #23AB09 0%, #22F200 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            transition={{ duration: 0.2 }}
            className={"cursor-pointer"}
          >
            Cubyx
          </motion.span>{" "}
          Network!{" "}
        </h1>

        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          className={"max-w-xl"}
        >
          <Image src={logo} alt={"CubyxNetwork Logo"} />
        </motion.div>
      </motion.div>

      <main className="p-8">
        <Section
          headline={"Wir sind in der Alpha!"}
          className={"my-12"}
          alt={"alpha warnung"}
        >
          Derzeit arbeiten wir noch hart an der Realisierung unserer neuen
          Website. Zukünftig wird es noch einiges mehr zu entdecken geben.
          Leider konnten wir noch nicht alles fertigstellen, daher mussten wir
          einiges einkürzen bzw. deaktivieren. Dennoch kann bereits die neue
          Designsprache bewundert werden.
          <br />
          Das Cubyx Team wünscht dennoch viel Spaß auf der neuen Website!
        </Section>

        <Section
          headline={"Cubyx - Zukunft, Gemeinsam gestalten!"}
          leftImage={snowyHouses}
          alt={"Verschneite Häuser"}
        >
          Cubyx ist ein seit Anfang 2020 bestehendes Netzwerk, welches sich um
          das Spiel Minecraft spezialisiert hat. Wir sind jedoch mehr als nur
          Blöckchen. Wir bieten Unterhaltung von klassischen Minecraft
          Spielmodi, bis hin zu gehaltvollen Videos auf unserem Youtube-Kanal.
          Cubyx ist zudem ein föderal aufgebautes, demokratisches Team. Wir
          legen viel Wert auf ein gemeinsames Miteinander im Team und in unserer
          Community.
        </Section>

        <Stats />

        <Section
          headline={"Wo sind wir zu finden?"}
          rightImage={tectaBridge}
          alt={"Holzbrücke"}
        >
          Cubyx ist auf vielen Plattformen vertreten. Zum einen auf Plattformen
          wie YouTube, Twitch oder PlanetMinecraft. Aber auch auf anderen
          Plattformen wie Spotify, Reddit oder Discord sind wir zu finden. Zudem
          haben wir unsere eigene Mastodon Instanz, welche wir nutzen. Twitter
          nutzen wir seit dem 01.01.2023 nicht mehr. Wir empfehlen unsere
          Mastodon-Instanz zu nutzen.
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
