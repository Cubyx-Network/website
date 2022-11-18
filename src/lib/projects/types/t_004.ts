import { JsonObject } from "type-fest";
import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";

export type t_004 = {
  title: string;
  text: string;
  imageUrl_1: string;
  imageUrl_2: string;
};

class T_004_CLASS implements ProjectPageInterface {
  public title: string = "";
  public text: string = "";
  public imageUrl_1: string = "";
  public imageUrl_2: string = "";

  parse(json: JsonObject): this {
    this.title = json.title as string;
    this.text = json.text as string;
    this.imageUrl_1 = json.imageUrl_1 as string;
    this.imageUrl_2 = json.imageUrl_2 as string;
    return this;
  }

  type: string = "t_004";
}

export default T_004_CLASS;
