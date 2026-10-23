import {Link} from "react-router-dom";
import Reveal from "../components/Reveal.tsx";
import StaticHero from "../components/StaticHero.tsx";
import {useLang} from "../i18n/useLang.ts";


export default function NotFound () {
    const { notFound } = useLang().t

    return (
        <section className='flex min-h-screen items-center justify-center px-6 py-28'>
            <div className="text-center">
                <Reveal reverse={false}>
                    <div className="relative mx-auto h-48 w-48">
                        <StaticHero />
                        <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-widest text-cyan-300">
                            404
                        </span>
                    </div>
                </Reveal>
                <Reveal delay={0.1} reverse={false}>
                    <h1 className="mt-8 font-bold tracking-widest text-4xl text-white">
                        {notFound.title}
                    </h1>
                </Reveal>
                <Reveal delay={0.2} reverse={false}>
                    <p className="mt-5 tracking-widest text-xl text-white/50">
                        {notFound.text}
                    </p>
                </Reveal>
                <Reveal delay={0.3} reverse={false}>
                    <Link
                        to="/"
                        className="mt-10 inline-block rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-103"
                    >
                        {notFound.back}
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
