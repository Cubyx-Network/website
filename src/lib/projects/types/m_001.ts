import { JsonObject } from "type-fest";
import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";

export type m_001 = {
  embedUrl: string;
};

class M_001_CLASS implements ProjectPageInterface {
  public embedUrl: string = "";

  parse(json: JsonObject): this {
    this.embedUrl = json.embedUrl as string;
    return this;
  }

  type: string = "m_001";
}

export default M_001_CLASS;
