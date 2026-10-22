import { Link } from 'react-router-dom'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { useLang } from '../i18n/useLang.ts'
import circle from '../assets/circle-no-bg.svg'

export default function Introduction() {
    const { about } = useLang().t
    return (
        <Section
            id="rreth-nesh"
            backdrop={
                <Parallax y={160} rotate={120} className="absolute -right-56 top-1/4 hidden md:block">
                    <img src={circle} alt="" className="h-144 w-xl opacity-[0.07]" />
                </Parallax>
            }
        >
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-white/80 font-bold leading-snug text-3xl md:text-4xl">{about.lead}</h1>
                    {about.paragraphs.map((p, i) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                                {p}
                            </p>
                        </Reveal>
                    ))}
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
                            <a
                                href="#cfare-ofrojme"
                                className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-105"
                            >
                                {about.actions.approach}
                            </a>
                            <Link
                                to="/contact"
                                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
                            >
                                {about.actions.team}
                            </Link>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.3} className="hidden md:block">
                    <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-dashed border-white/20 text-sm text-white/40">
                        Permbajtje grafike?
                    </div>
                </Reveal>
            </div>
        </Section>
    )
}
