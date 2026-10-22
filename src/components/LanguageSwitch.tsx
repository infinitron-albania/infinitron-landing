import {FaGlobe} from "react-icons/fa6";
import {useLang} from "../i18n/useLang.ts";

export default function LanguageSwitch() {
    const {lang, setLang, t} = useLang()
    const next = lang === 'sq' ? 'en' : 'sq'

    return (
        <button
            onClick={() => setLang(next)}
            aria-label={t.ui.switchLanguage}
            title={t.ui.switchLanguage}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-md transition-colors hover:border-brand/50 hover:text-white"
        >
            <FaGlobe size={14} />
            {lang}
        </button>
    )
}
