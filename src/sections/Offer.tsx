import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { offer } from '../content/al'
import circle from '../assets/circle-no-bg.svg'

export default function Offer() {
    const timeline = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 75%', 'end 50%'] })

    return (
        <Section
            id="cfare-ofrojme"
            title={offer.title}
            backdrop={
                <Parallax y={140} rotate={-90} className="absolute -right-40 bottom-24 hidden md:block">
                    <img src={circle} alt="" className="h-96 w-96 opacity-[0.06]" />
                </Parallax>
            }
        >
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

                <div ref={timeline} className="relative">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-0 top-0 h-full w-px origin-top bg-linear-to-b from-cyan-300 via-cyan-400 to-sky-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                    />
                    <ol className="relative space-y-12 border-l border-white/15 pl-10">
                        {offer.steps.map((step, i) => (
                            <li key={step.title} className="relative">
                                <motion.span
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: '0px 0px -20% 0px' }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                    className="absolute -left-15 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950 text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                                >
                                    {i + 1}
                                </motion.span>
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
            </div>
        </Section>
    )
}
