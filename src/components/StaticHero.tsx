import { motion } from "motion/react";
import circle from '../assets/circle-no-bg.svg'

type Props = {
    circleLogo?: string,
    duration?: number,
    reverse?: boolean,
    className?: string
}

export default function StaticHero({ circleLogo = circle, duration = 40, reverse = false, className = '' }: Props) {
    return (
        <motion.img
            src={circleLogo}
            alt=""
            className={`h-full w-full ${className}`}
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
        />
    )
}