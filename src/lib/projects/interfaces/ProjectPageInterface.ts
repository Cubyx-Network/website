import { JsonObject } from "type-fest";

export interface ProjectPageInterface {
  type: string;
  parse(json: JsonObject): any;
}
