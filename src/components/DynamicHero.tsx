import type { ReactNode } from 'react'
import {
    ringCenter,
    ringInner,
    ringOuter,
    ringStill,
    ringViewBox,
} from './ringArt'
import SpinLayer from './SpinLayer'

type Props = {
    outer?: ReactNode
    inner?: ReactNode
    still?: ReactNode
    viewBox?: string
    center?: number
    color?: string

    splash?: boolean
    splashDuration?: number
    outerDuration?: number
    innerDuration?: number
    reverse?: boolean
    className?: string
}

export default function DynamicHero({
    outer = ringOuter,
    inner = ringInner,
    still = ringStill,
    viewBox = ringViewBox,
    center = ringCenter,
    color = '#3ad4d8',
    splash = false,
    splashDuration = 5,
    outerDuration = 35,
    innerDuration = 15,
    reverse = false,
    className = '',
}: Props) {
    const direction: 1 | -1 = reverse ? -1 : 1

    return (
        <svg
            viewBox={viewBox}
            fill={color}
            aria-hidden="true"
            className={`h-full w-full ${className}`}
        >
            <SpinLayer
                direction={direction}
                slowDuration={outerDuration}
                splash={splash}
                splashTurns={1}
                splashDuration={splashDuration}
                center={center}
            >
                {outer}
            </SpinLayer>

            <SpinLayer
                direction={(-direction) as 1 | -1}
                slowDuration={innerDuration}
                splash={splash}
                splashTurns={1.5}
                splashDuration={splashDuration}
                center={center}
            >
                {inner}
            </SpinLayer>

            {still}
        </svg>
    )
}