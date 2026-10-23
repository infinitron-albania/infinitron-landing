import {useLang} from "../i18n/useLang.ts";

export default function Footer() {
    const {ui} = useLang().t

    return (
        <footer className="border-t border-white/10 px-6 pt-6 pb-20 text-center text-xs tracking-wide text-white/40 sm:pb-6">
            © {new Date().getFullYear()} INFINITRON. {ui.rightsReserved}
        </footer>
    )
}
