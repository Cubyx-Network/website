import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";
import Image from "next/image";
import CubyxImage from "../components/image/CubyxImage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cubyx</title>
      </Head>

      <Header
        title={"Home"}
        description={"Willkommen auf dem Cubyx Network!"}
      />

      <div>
        <div className="flex items-center justify-between p-28 w-full h-screen">
          <h1 className="text-8xl font-bold">
            Willkommen auf dem <br />{" "}
            <span className="color-secondary">Cubyx</span> Network!
          </h1>
          <Image
            src="/img/netzwerk.png"
            alt="CubyxNetwork Logo"
            width="500px"
            height="500px"
          />
        </div>

        <div className="p-16">
          <div className="flex items-center flex-col">
            <CubyxImage
              src={"/img/home/banner.png"}
              alt={"Schiff in einer Bucht"}
              className={"w-1/2"}
            />

            <h1 className="text-4xl font-bold mt-4">
              Was ist das Cubyx Network?
            </h1>
            <p className="w-1/2 mt-4">
              Das Cubyx Network ist ein Minecraft Netzwerk, welches sich auf
              verschiedene Spielmodi spezialisiert hat. Wir bieten dir eine
              große Auswahl an Spielmodi, die du mit deinen Freunden spielen
              kannst. Wir bieten dir eine große Auswahl an Spielmodi, die du mit
              deinen Freunden spielen kannst. Wir bieten dir eine große Auswahl
              an Spielmodi, die du mit deinen Freunden spielen kannst.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
