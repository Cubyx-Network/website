import t_001 from "./types/t_001";
import t_002 from "./types/t_002";
import t_004 from "./types/t_004";
import t_003 from "./types/t_003";
import m_001 from "./types/m_001";

export type ProjectModule = t_001 | t_002 | t_004 | t_003 | m_001;
const index = [t_001, t_002, t_003, t_004, m_001];

/**
 * Searches for a type in the index and returns an instance of it
 * @param type
 * @returns ProjectModule
 */
export function getByType(type: string): ProjectModule | undefined {
  for (const m of index) {
    const i = new m();
    if (i.type === type) {
      return i;
    }
  }
}
