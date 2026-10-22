import {createContext, useContext} from "react";
import type {Lang} from "../types/types.ts";
import type {Content} from "../content/al.ts";

type Ctx = { lang: Lang, t: Content, setLang: (l: Lang) => void }
export const LanguageContext = createContext<Ctx | null>(null)

export function useLang() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang must be used within LanguageProvider");
    return ctx;
}
