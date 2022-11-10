import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";
import ProjectPageModule from "../ProjectPageModule";

export type t_002 = {
  text: string;
  imageUrl: string;
};

class T_002_CLASS
  extends ProjectPageModule
  implements ProjectPageInterface<t_002>
{
  constructor() {
    super("t_002");
  }

  parse(json: JsonObject): t_002 {
    return {
      text: json.text as string,
      imageUrl: json.imageUrl as string,
    };
  }
}

export default T_002_CLASS;
