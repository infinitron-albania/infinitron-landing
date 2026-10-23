import Reveal from "../components/Reveal.tsx";
import {useLang} from "../i18n/useLang.ts";
import ContactCard from "../components/ContactCard.tsx";


export default function Contact () {
    const { contact } = useLang().t

    return (
        <section className='relative overflow-hidden px-6 py-28'>
            <div className="relative max-w-7xl mx-auto">
                <Reveal className="text-center" reverse={false}>
                    <h1 className="font-light tracking-[.20em] text-lg md:text-xl text-cyan-300 font-bristone">
                        {contact.title}
                    </h1>
                </Reveal>
                <Reveal className="text-center" delay={0.1} reverse={false}>
                    <h2 className="mt-5 font-bold tracking-widest text-xl md:text-2xl text-white font-bristone">
                        {contact.tagline}
                    </h2>
                </Reveal>
                <div className="mx-auto max-w-4xl">
                    <Reveal className="text-center" delay={0.1} reverse={false}>
                        <p className="mt-5 tracking-widest text-xl text-white/50">
                            {contact.text}
                        </p>
                    </Reveal>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {contact.contactTypes.map((type, i) => (
                        <Reveal delay={i * 0.12} reverse={false}>
                            <ContactCard key={type.title} {...type} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}