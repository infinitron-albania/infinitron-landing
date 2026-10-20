import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; y?: number; rotate?: number }

export default function Parallax({ children, className, y = 0, rotate = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const factor = useReducedMotion() ? 0 : 1
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const ty = useTransform(scrollYProgress, [0, 1], [y * factor, -y * factor])
    const tr = useTransform(scrollYProgress, [0, 1], [0, rotate * factor])

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y: ty, rotate: tr }}>{children}</motion.div>
        </div>
    )
}
