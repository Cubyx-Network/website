import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";
import ProjectPageModule from "../ProjectPageModule";

export type t_001 = {
  text: string;
  imageUrl: string;
};

class T_001_CLASS
  extends ProjectPageModule
  implements ProjectPageInterface<t_001>
{
  constructor() {
    super("t_001");
  }

  parse(json: JsonObject): t_001 {
    return {
      text: json.text as string,
      imageUrl: json.imageUrl as string,
    };
  }
}

export default T_001_CLASS;
