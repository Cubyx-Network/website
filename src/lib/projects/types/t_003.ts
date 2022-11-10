import { ProjectPageInterface } from "../interfaces/ProjectPageInterface";
import { JsonObject } from "type-fest";
import ProjectPageModule from "../ProjectPageModule";

export type t_003 = {
  text: string;
  imageUrl: string;
};

class T_003_CLASS
  extends ProjectPageModule
  implements ProjectPageInterface<t_003>
{
  constructor() {
    super("t_003");
  }

  parse(json: JsonObject): t_003 {
    return {
      text: json.text as string,
      imageUrl: json.imageUrl as string,
    };
  }
}

export default T_003_CLASS;
