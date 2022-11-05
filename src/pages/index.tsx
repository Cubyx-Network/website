import type { NextPage } from "next";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";
import Image from "next/image";

import banner from "../../public/img/home/banner.png";
import logo from "../../public/img/netzwerk.png";
import SectionHTLeftPRight from "../components/sections/SectionHTLeftPRight";
import SectionHTRightPLeft from "../components/sections/SectionHTRightPLeft";

const Home: NextPage = () => {
  return (
    <>
      <Header
        title={"Home"}
        description={"Willkommen auf dem Cubyx Network!"}
      />

      <div>
        <div className="flex h-screen w-full items-center justify-center text-center md:justify-between md:p-28 md:text-left">
          <h1 className="text-6xl font-bold md:text-8xl">
            Willkommen auf dem <br />{" "}
            <span className="text-text-secondary">Cubyx</span> Network!
          </h1>

          <Image
            src={logo}
            alt={"CubyxNetwork Logo"}
            className={"hidden w-1/2 md:block lg:w-1/4"}
          />
        </div>

        <main className="flex flex-col gap-16 p-16 ">
          <SectionHTLeftPRight
            headline={"Was ist das Cubyx Network?"}
            image={banner}
            alt={"Schiff in einer Bucht"}
          >
            Das Cubyx Network ist ein Minecraft Netzwerk, welches sich auf
            verschiedene Spielmodi spezialisiert hat. Wir bieten dir eine große
            Auswahl an Spielmodi, die du mit deinen Freunden spielen kannst. Wir
            bieten dir eine große Auswahl an Spielmodi, die du mit deinen
            Freunden spielen kannst. Wir bieten dir eine große Auswahl an
            Spielmodi, die du mit deinen Freunden spielen kannst.
          </SectionHTLeftPRight>

          <SectionHTRightPLeft
            headline={"Was zeichnet uns aus?"}
            image={banner}
            alt={"Netzwerk Logo"}
          >
            Das Cubyx Network ist ein Minecraft Netzwerk, welches sich auf
            verschiedene Spielmodi spezialisiert hat. Wir bieten dir eine große
            Auswahl an Spielmodi, die du mit deinen Freunden spielen kannst. Wir
            bieten dir eine große Auswahl an Spielmodi, die du mit deinen
            Freunden spielen kannst. Wir bieten dir eine große Auswahl an
            Spielmodi, die du mit deinen Freunden spielen kannst.
          </SectionHTRightPLeft>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
