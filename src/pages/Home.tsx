import { MotionConfig } from 'motion/react'
import Hero from '../sections/Hero'
import Introduction from '../sections/Introduction.tsx'
import Mission from "../sections/Mission.tsx";
import Offer from "../sections/Offer.tsx";
import Industries from "../sections/Industries.tsx";
import ContactUs from "../sections/ContactUs.tsx";

export default function Home() {
    return (
        <>
            <Hero />
            <MotionConfig reducedMotion="user">
                <div className="relative overflow-x-clip">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-size-[32px_32px] mask-[linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
                    />
                    <Introduction />
                    <Mission />
                    <Offer />
                    <Industries />
                    <ContactUs />
                </div>
            </MotionConfig>
        </>
    )
}
