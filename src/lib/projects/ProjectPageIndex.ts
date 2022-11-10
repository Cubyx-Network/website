import m_001, { m_001 as M1 } from "./types/m_001";
import t_001, { t_001 as T1 } from "./types/t_001";
import t_002, { t_002 as T2 } from "./types/t_002";
import t_003, { t_003 as T3 } from "./types/t_003";
import t_004, { t_004 as T4 } from "./types/t_004";

export type ProjectPageModuleClass = m_001 | t_001 | t_002 | t_003 | t_004;
export type ProjectPageModuleType = M1 | T1 | T2 | T3 | T4;

const M_001 = new m_001();
const T_001 = new t_001();
const T_002 = new t_002();
const T_003 = new t_003();
const T_004 = new t_004();

export function getProjectPageModules() {
  return [M_001, T_001, T_002, T_003, T_004];
}

export function getByType(type: string): ProjectPageModuleClass | undefined {
  const modules = getProjectPageModules();
  for (const m of modules) {
    if (m.type === type) {
      return m;
    }
  }
}
