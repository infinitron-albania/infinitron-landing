import { motion } from 'motion/react'
import { useLang } from '../i18n/useLang.ts'
import DynamicHero from "../components/DynamicHero.tsx";
import infinitron_icon from '../assets/infinitron_icon.svg';

export default function Hero() {
    const { hero } = useLang().t
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-10 h-56 w-56 md:h-72 md:w-72">
                    <DynamicHero />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl text-white font-bold tracking-[0.25em] md:text-7xl"
                >
                    <img src={infinitron_icon} alt="Infinitron" className="block h-auto w-72 max-w-full md:w-xl" />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg text-white/80 md:text-2xl"
                >
                    {hero.line1}
                </motion.p>
            </div>
        </section>
    )
}