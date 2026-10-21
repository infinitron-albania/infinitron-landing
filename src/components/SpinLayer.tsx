import {type ReactNode, useEffect} from "react";
import {animate, motion, useMotionValue, useReducedMotion} from "motion/react";

type LayerProps = {
    children: ReactNode
    direction: 1 | -1
    slowDuration: number
    splash: boolean
    splashTurns: number
    splashDuration: number
    center: number
}

export default function SpinLayer({
    children,
    direction,
    slowDuration,
    splash,
    splashTurns,
    splashDuration,
    center,
}: LayerProps) {
    const rotate = useMotionValue(0)
    const reduceMotion = useReducedMotion()

    useEffect(() => {
        if (reduceMotion) return
        let controls: { stop: () => void } | undefined

        const settle = () => {
            const from = rotate.get()
            controls = animate(rotate, from + direction * 360, {
                duration: slowDuration,
                ease: 'linear',
                repeat: Infinity,
            })
        }

        if (splash) {
            controls = animate(rotate, direction * splashTurns * 360, {
                duration: splashDuration,
                ease: 'easeOut',
                onComplete: settle,
            })
        } else {
            settle()
        }

        return () => controls?.stop()
    }, [rotate, reduceMotion, splash, direction, slowDuration, splashTurns, splashDuration])

    return (
        <motion.g
            style={{
                rotate,
                transformBox: 'view-box',
                transformOrigin: `${center}px ${center}px`,
            }}
        >
            {children}
        </motion.g>
    )
}