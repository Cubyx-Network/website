import type { NextPage } from "next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";

const ProjectPage: NextPage = () => {
  return (
    <>
      <Header
        title={"Projekte"}
        description={"Hier findest du alle Projekte von Cubyx!"}
      />

      <Footer />
    </>
  );
};

export default ProjectPage;
