import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { mission } from '../content/al'

const outline = 'hidden md:block absolute inset-x-0 whitespace-nowrap text-center text-[min(3.5vw,5rem)] font-black uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(103,232,249,0.18)]'

export default function Mission() {
    const band = useRef<HTMLDivElement>(null)
    const shift = useReducedMotion() ? 0 : 12
    const { scrollYProgress } = useScroll({ target: band, offset: ['start end', 'end start'] })
    const forward = useTransform(scrollYProgress, [0, 1], [`${shift}vw`, `${-shift}vw`])
    const backward = useTransform(scrollYProgress, [0, 1], [`${-shift}vw`, `${shift}vw`])

    return (
        <Section
            id="misioni"
            title={mission.title}
            backdrop={
                <div ref={band} className="absolute inset-0">
                    <motion.p style={{ x: forward }} className={`${outline} top-16`}>
                        {mission.slogan}
                    </motion.p>
                    <motion.p style={{ x: backward }} className={`${outline} bottom-16`}>
                        {mission.slogan}
                    </motion.p>
                </div>
            }
        >
            <div className="grid items-center gap-12 md:grid-cols-2">
                <Reveal className="hidden md:block">
                    <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-dashed border-white/20 text-sm text-white/40">
                        Punimi nga Dejv?
                    </div>
                </Reveal>

                <div className="space-y-8">
                    <Reveal>
                        <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                            {mission.paragraphs[0]}
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <p className="border-l-2 border-cyan-400 pl-5 text-2xl font-semibold text-cyan-300 md:text-3xl">
                            {mission.slogan}
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                            {mission.paragraphs[1]}
                        </p>
                    </Reveal>
                </div>
            </div>
        </Section>
    )
}