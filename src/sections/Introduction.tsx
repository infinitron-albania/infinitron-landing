import { Link } from 'react-router-dom'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { useLang } from '../i18n/useLang.ts'
import circle from '../assets/circle-no-bg.svg'
import neon_hub from '../assets/neon_nub.webp'

export default function Introduction() {
    const { about } = useLang().t
    return (
        <Section
            id="rreth-nesh"
            backdrop={
                <Parallax y={160} rotate={120} className="absolute -left-56 top-1/4 hidden md:block">
                    <img src={circle} alt="" loading="lazy" decoding="async" className="h-144 w-xl opacity-[0.07]" />
                </Parallax>
            }
        >
            <Reveal>
                <h1 className="mb-20 md:max-w-7xl text-center text-xl font-bold leading-snug text-white/80 md:text-center md:text-2xl font-bristone">{about.lead}</h1>
            </Reveal>

            <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-center md:text-left">
                    <Reveal>
                        <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                            {about.paragraphs[0]}
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                            {about.paragraphs[1]}
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
                            <a
                                href="#cfare-ofrojme"
                                className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-103"
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
                    <img alt='neon_hub' src={neon_hub} width={1240} height={930} loading="lazy" decoding="async" className='h-full w-full object-cover' />
                </Reveal>
            </div>
        </Section>
    )
}
