import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";

class T_002_CLASS implements ProjectPageInterface {
  public text: string = "";
  public imageUrl: string = "";

  parse(json: JsonObject): this {
    this.text = json.text as string;
    this.imageUrl = json.imageUrl as string;
    return this;
  }

  type: string = "t_002";
}

export default T_002_CLASS;
