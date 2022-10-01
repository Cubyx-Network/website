import type { NextPage } from "next";
import Header from "../components/header/Header";
import CubyxImage from "../components/image/CubyxImage";

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
            <span className="color-secondary">Cubyx</span> Network!
          </h1>

          <CubyxImage
            src={"/img/netzwerk.png"}
            alt={"CubyxNetwork Logo"}
            className={"hidden w-1/2 md:block lg:w-1/4"}
          />
        </div>

        <main className="p-16">
          <section className="flex flex-col lg:items-center">
            <CubyxImage
              src={"/img/home/banner.png"}
              alt={"Schiff in einer Bucht"}
              className={"w-full md:w-1/2"}
            />

            <h1 className="mt-4 text-4xl font-bold">
              Was ist das Cubyx Network?
            </h1>
            <p className="mt-4 w-full lg:w-1/2">
              Das Cubyx Network ist ein Minecraft Netzwerk, welches sich auf
              verschiedene Spielmodi spezialisiert hat. Wir bieten dir eine
              große Auswahl an Spielmodi, die du mit deinen Freunden spielen
              kannst. Wir bieten dir eine große Auswahl an Spielmodi, die du mit
              deinen Freunden spielen kannst. Wir bieten dir eine große Auswahl
              an Spielmodi, die du mit deinen Freunden spielen kannst.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
