import { motion, useInView } from 'motion/react'
import { type ReactNode, useRef } from 'react'

type Props = { children: ReactNode; delay?: number; className?: string; reverse?: boolean }

export default function Reveal({ children, delay = 0, className, reverse = true }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: !reverse, margin: '-80px' })

    return (
        <div ref={ref} className={className}>
            <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.7, delay, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    )
}
