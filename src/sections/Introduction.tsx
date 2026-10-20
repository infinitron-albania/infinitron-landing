import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { about } from '../content/al'

export default function Introduction() {
    return (
        <Section id="rreth-nesh">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-white/80 font-bold leading-relaxed text-4xl">Cfarë është Infinitron?</h1>
                    {about.paragraphs.map((p, i) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                                {p}
                            </p>
                        </Reveal>
                    ))}
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