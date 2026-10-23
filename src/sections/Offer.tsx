import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { useLang } from '../i18n/useLang.ts'
import circle from '../assets/circle-no-bg.svg'
import offerBackground from '../assets/offer_background.webp'
import business_collaboration_icon from '../assets/business_collaboration_icon.webp'
import digital_solution_icon from '../assets/digital_solution_icon.webp'
import process_improvement_icon from '../assets/process_improvement_icon.webp'

const icons = [process_improvement_icon, digital_solution_icon, business_collaboration_icon]

export default function Offer() {
    const { offer } = useLang().t
    const timeline = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 75%', 'end 50%'] })

    return (
        <Section
            id="cfare-ofrojme"
            title={offer.title}
            backdrop={
                <Parallax y={140} rotate={-90} className="absolute -right-40 bottom-24 hidden md:block">
                    <img src={circle} alt="" loading="lazy" decoding="async" className="h-96 w-96 opacity-[0.06]" />
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
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
                {offer.services.map((service, i) => (
                    <Reveal key={service.title} delay={i * 0.15} className="h-full">
                        <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8">
                            <img src={icons[i]} alt="" loading="lazy" decoding="async" className="aspect-6/5 w-full object-contain" />
                            <h3 className="text-2xl font-semibold">{service.title}</h3>
                            <p className="mt-4 leading-relaxed text-white/70">{service.text}</p>
                        </article>
                    </Reveal>
                ))}
            </div>

            <div className="relative mt-4 -mb-24">
                <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
                    <img
                        src={offerBackground}
                        alt=""
                        loading="lazy" decoding="async"
                        className="h-full w-full object-cover mask-[linear-gradient(to_bottom,transparent,black_40%,black_50%,transparent)]"
                    />
                </div>

                <Reveal className="relative mt-24">
                    <h3 className="mb-12 text-2xl font-bold text-cyan-300 md:text-3xl font-bristone">
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
                                    viewport={{ once: false, margin: '0px 0px -20% 0px' }}
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
