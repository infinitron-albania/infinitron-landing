import type { ReactNode } from 'react'

type Props = { id?: string; title?: string; children: ReactNode }

export default function Section({ id, title, children }: Props) {
    return (
        <section id={id} className="relative px-6">
            <div className="mx-auto max-w-7xl">
                {title && (
                    <h2 className="mb-10 text-3xl font-bold md:text-5xl">{title}</h2>
                )}
                {children}
            </div>
        </section>
    )
}