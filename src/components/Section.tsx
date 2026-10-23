import type { ReactNode } from 'react'

type Props = { id?: string; title?: string; backdrop?: ReactNode; children: ReactNode }

export default function Section({ id, title, backdrop, children }: Props) {
    return (
        <section id={id} className="relative px-4 py-35">
            {backdrop && (
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-x-clip">
                    {backdrop}
                </div>
            )}
            <div className="relative mx-auto max-w-5/6">
                {title && (
                    <h2 className="mb-10 text-2xl font-bold md:text-3xl font-bristone">{title}</h2>
                )}
                {children}
            </div>
        </section>
    )
}
