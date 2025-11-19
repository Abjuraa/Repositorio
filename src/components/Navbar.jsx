import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 95)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="navbar fixed z-50">
            <div
                className={
                    `flex items-center justify-center px-4 py-2 mx-auto my-4 rounded-4xl w-full max-w-[600px] backdrop-blur-lg
                    ${scrolled ? 'border border-color' : 'border border-transparent'}`
                }
            >
                <div className="flex gap-4">
                    <a href="#welcome" className="btn btn-ghost text-base text-slate-50">{t('navbar.home')}</a>
                    <a href="#aboutme" className="btn btn-ghost text-slate-50">{ t("navbar.about")}</a>
                    <a href="#projects" className="btn btn-ghost text-slate-50">{t("navbar.projects")}</a>
                    <a href="#contact" className="btn btn-ghost text-slate-50">{t("navbar.contact")}</a>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-slate-50">{ t("navbar.language")}</div>
                        <ul className="dropdown-content menu rounded-box z-1 w-25 p-2 mt-4 shadow-sm bg-primary">
                            <li><button onClick={() => i18n.changeLanguage('es')}>Español</button></li>
                            <li><button onClick={() => i18n.changeLanguage('en')}>Ingles</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}