import type {Lang} from "../types/types.ts";
import {al, type Content} from "../content/al.ts";
import {en} from "../content/en.ts";
import {type ReactNode, useEffect, useState} from "react";
import {LanguageContext} from "./useLang.ts";


const dictionaries: Record<Lang, Content> = {sq: al, en}
const STORAGE_KEY = "lang";

function detectLanguage(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'sq' || saved === 'en') return saved
    }catch { /* no storage so ignore */ }

    for (const l of navigator.languages ?? [navigator.language]) {
        const code = l.toLowerCase().split('-')[0]
        if (code === 'sq') return 'sq'
        if (code === 'en') return 'en'
    }
    return 'sq';
}

export function LanguageProvider({ children }: {children: ReactNode}) {
    const [lang, setLang] = useState<Lang>(detectLanguage);

    const setLanguage = (l: Lang) => {
        setLang(l);
        try {
            localStorage.setItem(STORAGE_KEY, l);
        }catch {
            // ignore
        }
    }

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang: setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
