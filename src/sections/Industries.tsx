import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { useLang } from '../i18n/useLang.ts'
import supplierIcon from '../assets/supplier_icon.svg'
import merchantIcon from '../assets/merchant_icon.svg'
import bankIcon from '../assets/bank_icon.svg'

const icons = [supplierIcon, merchantIcon, bankIcon]

export default function Industries() {
    const { industries } = useLang().t
    return (
        <Section id="industrite" title={industries.title}>
            <div className="grid items-center justify-between gap-12 md:grid-cols-2">
                <Reveal>
                    <p className="max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
                        {industries.intro}
                    </p>
                </Reveal>

            </div>


            <div className="mt-16 grid gap-6 md:grid-cols-3">
                {industries.items.map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.15} className="h-full">
                        <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors">
                            <div className="mb-8 flex h-28 items-center justify-center">
                                <img src={icons[i]} alt="" className="h-full w-auto object-contain" />
                            </div>

                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="mt-4 leading-relaxed text-white/70">{item.text}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}