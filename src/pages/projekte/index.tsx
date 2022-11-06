import type { NextPage } from "next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import styles from "./Projects.module.css";

const ProjectPage: NextPage = () => {
  return (
    <>
      <Header
        title={"Projekte"}
        description={"Hier findest du alle Projekte von Cubyx!"}
      />

      <div
        className={
          styles.hero + " " + "flex h-96 w-full items-center justify-center"
        }
      >
        <h1 className="text-6xl font-extrabold">Unsere Projekte</h1>
      </div>

      <Footer />
    </>
  );
};

export default ProjectPage;
