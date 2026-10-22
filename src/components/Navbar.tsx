import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/useLang.ts'
import infinitron_icon from "../assets/infinitron_icon.svg";

export default function Navbar() {
    const { nav, ui } = useLang().t
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()
    const [menu, setMenu] = useState({ pathname, open: false })

    if (menu.pathname !== pathname) {
        setMenu({ pathname, open: false })
    }
    const open = menu.pathname === pathname && menu.open

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`absolute inset-x-0 top-0 z-50 rounded-b-xl transition-all duration-300 ${
                scrolled || open
                    ? 'bg-transparent backdrop-blur-md border-white/10'
                    : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link to="/" aria-label="Infinitron">
                    <img src={infinitron_icon} alt="Infinitron" className="block h-auto w-40 max-w-full" />
                </Link>

                {/* desktop */}
                <ul className="hidden items-center gap-8 md:flex">
                    {nav.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.link}
                                end={item.link === '/'}
                                className={({ isActive }) =>
                                    `text-sm tracking-wide transition-colors ${
                                        isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={() =>
                        setMenu((current) => ({
                            pathname,
                            open: current.pathname === pathname ? !current.open : true,
                        }))
                    }
                    aria-label={ui.menu}
                    aria-expanded={open}
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                    </svg>
                </button>
            </nav>

            {/* mobile */}
            {open && (
                <ul className="md:hidden flex flex-col gap-1 px-6 pb-6">
                    {nav.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.link}
                                end={item.link === '/'}
                                className={({ isActive }) =>
                                    `block py-3 text-lg ${isActive ? 'text-white' : 'text-white/60'}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}