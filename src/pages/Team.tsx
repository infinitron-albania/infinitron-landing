import Reveal from "../components/Reveal.tsx";
import TeamCard from "../components/TeamCard.tsx";
import {team} from "../content/al.ts";


export default function Team () {
    return (
        <section className="relative overflow-hidden px-6 pb-28 pt-32">
            <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                    <h1 className="mt-6 font-bold uppercase tracking-wider text-5xl md:text-5xl">
                        {team.titleLine1}
                        <span className="block text-brand">{team.titleLine2}</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-lg">
                        {team.intro}
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
                    {team.members.map((m, i) => (
                        <Reveal key={m.name} delay={(i % 2) * 0.12} className="h-full">
                            <TeamCard member={m} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}