import React from "react";
import Icon from "../../../components/icon/Icon";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const ApplyFormular = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={"Jetzt Bewerben!"}
        description={"Bewerbungsformular des Cubyx Teams!"}
        noindex={true}
      />

      <div className="h-screen w-full overflow-x-hidden bg-background-primary p-4 dark:bg-background-primary-dark">
        <div className="fixed bottom-0 left-0 w-full bg-background-primary p-4 dark:bg-background-primary-dark">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2">
              <Icon name={"arrow-left-line"} className={"ri-2x"} />
              <span className="text-xl">Zurück</span>
            </button>

            <button className="flex items-center gap-2">
              <span className="text-xl">Weiter</span>
              <Icon name={"arrow-right-line"} className={"ri-2x"} />
            </button>
          </div>
          <button
            className="input mt-2"
            onClick={() => router.push("/bewerben")}
          >
            Abbrechen
          </button>
        </div>

        <div className="h-full w-full overflow-y-scroll">
          <p>Hello World 1!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World 1!</p>
        </div>
      </div>
    </>
  );
};

export default ApplyFormular;
