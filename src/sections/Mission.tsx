import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { mission } from '../content/al'

export default function Mission() {
    return (
        <Section id="misioni" title={mission.title}>
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