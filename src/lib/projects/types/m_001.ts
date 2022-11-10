import { JsonObject } from "type-fest";
import ProjectPageModule from "../ProjectPageModule";
import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";

export type m_001 = {
  embedUrl: string;
};

class M_001_CLASS
  extends ProjectPageModule
  implements ProjectPageInterface<m_001>
{
  constructor() {
    super("m_001");
  }

  parse(json: JsonObject): m_001 {
    return {
      embedUrl: json.embedUrl as string,
    };
  }
}

export default M_001_CLASS;
