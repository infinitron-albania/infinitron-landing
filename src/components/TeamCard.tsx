import type {TeamMember} from "../types/types.ts";
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa";
import circleAvatar from "../assets/avatar-circle.svg";
import StaticHero from "./StaticHero.tsx";

export default function TeamCard({ member } : { member: TeamMember }) {
    const links = [
        { href: member.linkedin, label: 'Linkedin', Icon: FaLinkedin },
        { href: member.email, label: 'Email', Icon: FaEnvelope },
    ].filter((m) => m.href)

    return (
        <article className="flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/3 p-8 text-center transition-colors">
            <div className="relative h-44 w-44">
                <StaticHero circleLogo={circleAvatar} />
                <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy" decoding="async"
                    className="absolute left-1/2 top-1/2 h-[57%] w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
                />
            </div>

            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
            <p className="mt-4 flex-1 leading-relaxed text-white/70">{member.bio}</p>

            <div className="flex gap-5 pt-6 text-brand">
                {links.map(({ href, label, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={`${member.name} – ${label}`}
                        target={label === 'Email' ? undefined : '_blank'}
                        rel="noreferrer"
                        className="transition-transform hover:scale-110"
                    >
                        <Icon size={20} />
                    </a>
                ))}
            </div>
        </article>
    )
}