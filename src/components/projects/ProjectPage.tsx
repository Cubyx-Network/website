import { ProjectPage } from "../../lib/projects/ProjectPageUtils";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Icon from "../icon/Icon";
import t_001 from "../../lib/projects/types/t_001";
import T001 from "./modules/T001";

const ProjectPageComponent = ({ data }: { data: ProjectPage }) => {
  return (
    <>
      <Header
        title={data.title}
        description={`Dies ist die Projekt-Seite vom Projekt ${data.title}`}
      />

      <main className="flex h-screen w-full flex-col items-center gap-8 overflow-x-auto p-8 pt-48">
        <div className="flex w-full flex-col items-center gap-8 2xl:w-3/4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-6xl font-extrabold">
              {data.title}
            </h1>
            <span className="flex items-center gap-1 text-text-third">
              <Icon name={"calendar-line"} />
              {data.releaseDate.toLocaleDateString()}
            </span>
          </div>
          <div className="flex w-3/4 flex-col items-center gap-4">
            {data.components.map((module, index) => {
              if (module.type == "t_001") {
                return <T001 data={module as t_001} key={index} />;
              }
            })}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default ProjectPageComponent;
