import { JsonObject } from "type-fest";

export interface ProjectPageInterface<T> {
  parse(json: JsonObject): T;
}
