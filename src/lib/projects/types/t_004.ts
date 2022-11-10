import { JsonObject } from "type-fest";
import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";

class T_004_CLASS implements ProjectPageInterface {
  public text: string = "";
  public imageUrl_1: string = "";
  public imageUrl_2: string = "";

  parse(json: JsonObject): this {
    this.text = json.text as string;
    this.imageUrl_1 = json.imageUrl_1 as string;
    this.imageUrl_2 = json.imageUrl_2 as string;
    return this;
  }

  type: string = "t_004";
}

export default T_004_CLASS;
