import type { NextPage } from "next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import Section from "../../components/Section";
import snowyHouses from "../../../public/img/home/snowy_houses.png";

import styles from "./bewerben.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header
        title={"Bewerben"}
        description={"Werde jetzt Teil des Cubyx Teams!"}
      />

      <div
        className={
          styles.hero + " flex h-96 w-full items-center justify-center"
        }
      >
        <h1 className="text-center text-5xl font-bold">
          Bewerben beim Cubyx Team
        </h1>
      </div>

      <main className="p-8">
        <Section
          headline={"Werde ein Teil des Teams!"}
          alt={"marketing_quatsch"}
          rightImage={snowyHouses}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
