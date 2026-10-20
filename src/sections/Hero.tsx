import { motion } from 'motion/react'
import { hero } from '../content/al.ts'
import circle from '../assets/circle-no-bg.svg'

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-10 h-56 w-56 md:h-72 md:w-72">
                    <motion.img
                        src={circle}
                        alt=""
                        className="absolute inset-0 h-full w-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl text-white font-bold tracking-[0.25em] md:text-7xl"
                >
                    {hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 text-lg text-white/80 md:text-2xl"
                >
                    {hero.line1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-2 text-lg text-cyan-300 md:text-2xl"
                >
                    {hero.line2}
                </motion.p>
            </div>
        </section>
    )
}