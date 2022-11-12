import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";

export type t_002 = {
  title: string;
  text: string;
  imageUrl: string;
};

class T_002_CLASS implements ProjectPageInterface {
  public title: string = "";
  public text: string = "";
  public imageUrl: string = "";

  parse(json: JsonObject): this {
    this.title = json.title as string;
    this.text = json.text as string;
    this.imageUrl = json.imageUrl as string;
    return this;
  }

  type: string = "t_002";
}

export default T_002_CLASS;
