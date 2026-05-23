import type { Locale } from "../../i18n/types";

export const projectIds = ["herodms", "kiaworkspace", "glovisautobell", "d2chyundai", "accenturefinance"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
  hi: simplifyModules(import.meta.glob("./hi/*.ts", { eager: true })),
  hinglish: simplifyModules(import.meta.glob("./hinglish/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;
