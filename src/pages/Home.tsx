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
            <Introduction />
            <Mission />
            <Offer />
            <Industries />
            <ContactUs />
        </>
    )
}