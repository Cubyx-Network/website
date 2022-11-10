import { JsonObject } from "type-fest";
import { getByType, ProjectPageModuleType } from "./ProjectPageIndex";

type ProjectModule = {
  type: string;
  module: ProjectPageModuleType;
};

export type ProjectPage = {
  id: string;
  title: string;
  releaseDate: Date;
  components: ProjectModule[];
  toString: () => string;
};

/**
 * Parses a json from the prisma database into a ProjectPage
 * @param json
 * @returns ProjectPage
 */
export function parseJson(json: JsonObject): ProjectPage {
  const id = (json.id as string) || "";
  const title: string = (json.title as string) || "";
  const releaseDate: Date = new Date(
    (json.releaseDate as string) || Date.now()
  );
  const components: ProjectModule[] = [];

  for (const c of json.components as JsonObject[]) {
    const type = c.type as string;
    const m = getByType(type);
    if (m) {
      components.push({ type, module: m.parse(c.options as JsonObject) });
    }
  }

  return {
    id,
    title,
    releaseDate,
    components,
    toString: () => {
      return JSON.stringify({
        id,
        title,
        releaseDate,
        components: components.map((c) => c),
      });
    },
  };
}
