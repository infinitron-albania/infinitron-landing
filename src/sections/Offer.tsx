import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { offer } from '../content/al'

export default function Offer() {
    return (
        <Section id="cfare-ofrojme" title={offer.title}>
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-8">
                    {offer.paragraphs.map((p, i) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                                {p}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3} className="hidden md:block">
                    <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-dashed border-white/20 text-sm text-white/40">
                       Punim nga Dejv
                    </div>
                </Reveal>
            </div>

            <div className="mt-24">
                <Reveal>
                    <h3 className="mb-12 text-2xl font-bold text-cyan-300 md:text-4xl">
                        {offer.philosophyTitle}
                    </h3>
                </Reveal>

                <ol className="relative space-y-12 border-l border-white/15 pl-10">
                    {offer.steps.map((step, i) => (
                        <li key={step.title} className="relative">
                            <span className="absolute -left-15 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950 text-sm font-semibold text-cyan-300">
                                {i + 1}
                            </span>
                            <Reveal delay={0.1}>
                                <h4 className="text-xl font-semibold md:text-2xl">{step.title}</h4>
                                <p className="mt-2 max-w-2xl text-lg leading-relaxed text-white/70">
                                    {step.text}
                                </p>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    )
}