import { JsonObject } from "type-fest";
import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import ProjectPageModule from "../ProjectPageModule";

export type t_004 = {
  text: string;
  imageUrl_1: string;
  imageUrl_2: string;
};

class T_004_CLASS
  extends ProjectPageModule
  implements ProjectPageInterface<t_004>
{
  constructor() {
    super("t_004");
  }

  parse(json: JsonObject): t_004 {
    return {
      text: json.text as string,
      imageUrl_1: json.imageUrl_1 as string,
      imageUrl_2: json.imageUrl_2 as string,
    };
  }
}

export default T_004_CLASS;
