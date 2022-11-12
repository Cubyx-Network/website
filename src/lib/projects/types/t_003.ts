import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";

export type t_003 = {
  title: string;
  text: string;
};

class T_003_CLASS implements ProjectPageInterface {
  public title: string = "";
  public text: string = "";

  parse(json: JsonObject): this {
    this.title = json.title as string;
    this.text = json.text as string;
    return this;
  }

  type: string = "t_003";
}

export default T_003_CLASS;
