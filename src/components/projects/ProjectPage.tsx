import { ProjectPage } from "../../lib/projects/ProjectPageUtils";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Icon from "../icon/Icon";
import t_001 from "../../lib/projects/types/t_001";
import T001 from "./modules/T001";
import T002 from "./modules/T002";
import { t_002 } from "../../lib/projects/types/t_002";
import T003 from "./modules/T003";
import { t_003 } from "../../lib/projects/types/t_003";
import T004 from "./modules/T004";
import { t_004 } from "../../lib/projects/types/t_004";
import { t_005 } from "../../lib/projects/types/t_005";
import T005 from "./modules/T005";

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
          <div className="flex w-full flex-col items-center gap-4 lg:w-3/4">
            {data.components.map((module, index) => {
              if (module.type == "t_001") {
                return <T001 data={module as t_001} key={index} />;
              } else if (module.type == "t_002") {
                return <T002 data={module as t_002} key={index} />;
              } else if (module.type == "t_003") {
                return <T003 data={module as t_003} key={index} />;
              } else if (module.type == "t_004") {
                return <T004 data={module as t_004} key={index} />;
              } else if (module.type == "t_005") {
                return <T005 data={module as t_005} key={index} />;
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
