import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";

export type t_001 = {
  text: string;
  imageUrl: string;
};

class T_001_CLASS implements ProjectPageInterface {
  public text: string = "";
  public imageUrl: string = "";

  parse(json: JsonObject): this {
    this.text = json.text as string;
    this.imageUrl = json.imageUrl as string;
    return this;
  }

  type: string = "t_001";
}

export default T_001_CLASS;
