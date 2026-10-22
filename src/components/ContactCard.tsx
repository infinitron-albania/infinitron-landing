import StaticHero from "./StaticHero.tsx";
import circleLogo from "../assets/circle-no-bg.svg";
import type {ContactType} from "../types/types.ts";

export default function ContactCard({title, recap, description, icon: Icon} : ContactType) {
    return (
        <article className="flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/3 p-8 text-center transition-colors">
            <div className="relative h-34 w-34">
                <StaticHero circleLogo={circleLogo} />
                <div className="absolute left-1/2 top-1/2 flex h-[57%] w-[57%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-4xl text-brand">
                    <Icon />
                </div>
            </div>

            <h3 className="mt-4 text-start text-lg text-white/50">{title}</h3>
            <p className="mt-1 text-xl font-semibold text-brand">{recap}</p>
            <p className="mt-2 flex-1 leading-relaxed text-white/70">{description}</p>
        </article>
    )
}
