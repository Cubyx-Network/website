import type { NextPage } from "next";
import CubyxImage from "../components/CubyxImage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";

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

          <CubyxImage
            src={"/img/netzwerk.png"}
            alt={"CubyxNetwork Logo"}
            className={"hidden w-1/2 md:block lg:w-1/4"}
          />
        </div>

        <main className="p-16">
          <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-4">
            <CubyxImage
              src={"/img/home/banner.png"}
              alt={"Schiff in einer Bucht"}
              className={"w-full md:w-1/2 lg:w-1/2"}
            />

            <div className="flex-col lg:flex lg:w-1/2">
              <h1 className="mt-4 text-4xl font-bold lg:float-left lg:text-6xl">
                Was ist das Cubyx Network?
              </h1>
              <p className="mt-4 w-full lg:float-left lg:w-3/4 lg:text-lg">
                Das Cubyx Network ist ein Minecraft Netzwerk, welches sich auf
                verschiedene Spielmodi spezialisiert hat. Wir bieten dir eine
                große Auswahl an Spielmodi, die du mit deinen Freunden spielen
                kannst. Wir bieten dir eine große Auswahl an Spielmodi, die du
                mit deinen Freunden spielen kannst. Wir bieten dir eine große
                Auswahl an Spielmodi, die du mit deinen Freunden spielen kannst.
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
