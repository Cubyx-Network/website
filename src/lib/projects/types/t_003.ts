import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";

class T_003_CLASS implements ProjectPageInterface {
  public text: string = "";

  parse(json: JsonObject): this {
    this.text = json.text as string;
    return this;
  }

  type: string = "t_003";
}

export default T_003_CLASS;
