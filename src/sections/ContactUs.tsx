import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { contact } from '../content/al'

export default function ContactUs() {
    return (
        <Section id="kontakt">
            <Reveal>
                <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />

                    <Reveal>
                        <h2 className="relative text-3xl font-bold md:text-5xl">{contact.title}</h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="relative mt-6 text-xl text-cyan-300 md:text-2xl">{contact.tagline}</p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/70">{contact.text}</p>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <Link
                            to="/kontakt"
                            className="relative mt-10 inline-block rounded-full bg-cyan-300 px-8 py-3 font-semibold text-slate-900 transition-transform hover:scale-105"
                        >
                            {contact.button}
                        </Link>
                    </Reveal>
                </div>
            </Reveal>
        </Section>
    )
}