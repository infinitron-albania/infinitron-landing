import {Link} from "react-router-dom";
import Reveal from "../components/Reveal.tsx";
import StaticHero from "../components/StaticHero.tsx";
import {useLang} from "../i18n/useLang.ts";


export default function Portfolio () {
    const { portfolio } = useLang().t

    return (
        <section className='flex min-h-screen items-center justify-center px-6 py-28'>
            <div className="text-center">
                <Reveal reverse={false}>
                    <div className="mx-auto h-48 w-48">
                        <StaticHero />
                    </div>
                </Reveal>
                <Reveal delay={0.1} reverse={false}>
                    <h1 className="mt-8 font-bold uppercase tracking-widest text-4xl text-white">
                        {portfolio.title}
                    </h1>
                </Reveal>
                <Reveal delay={0.2} reverse={false}>
                    <p className="mx-auto mt-5 max-w-xl tracking-wide text-xl text-white/50">
                        {portfolio.text}
                    </p>
                </Reveal>
                <Reveal delay={0.3} reverse={false}>
                    <Link
                        to="/"
                        className="mt-10 inline-block rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-103"
                    >
                        {portfolio.back}
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
