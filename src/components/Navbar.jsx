import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

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
        <div className="flex justify-center align-center w-full mx-auto py-5 fixed z-50 ">
            <div
                className={
                    `flex py-2 px-6 md:justify-center md:align-center md:w-full md:max-w-[600px] md:px-4 md:py-2 md:mx-auto md:my-4 backdrop-blur-lg rounded-4xl
                    ${scrolled ? 'border border-color' : 'border border-transparent'}`
                }
            >
                <div className="flex flex-row gap-3 justify-center align-center md:gap-8">
                    <a href="#welcome" className="py-1 text-[12px] md:text-base font-semibold text-slate-50 md:hover:scale-103 transition-transform">{t('navbar.home')}</a>
                    <a href="#aboutme" className="py-1 text-[12px] md:text-base font-semibold text-slate-50 md:hover:scale-103 transition-transform">{t("navbar.about")}</a>
                    <a href="#projects" className="py-1 text-[12px] md:text-base font-semibold text-slate-50 md:hover:scale-103 transition-transform">{t("navbar.projects")}</a>
                    <a href="#contact" className="py-1 text-[12px] md:text-base font-semibold text-slate-50 md:hover:scale-103 transition-transform">{t("navbar.contact")}</a>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="py-1 text-[12px] md:text-base font-semibold text-slate-50 md:hover:scale-103 transition-transform">{t("navbar.language")}</div>
                        <ul className="dropdown-content menu rounded-box z-1 w-25 p-2 mt-4 text-[12px] shadow-sm bg-primary md:text-base">
                            <li className="text-slate-50"><button onClick={() => i18n.changeLanguage('es')}>{t("languages.spanish") }</button></li>
                            <li className="text-slate-50"><button onClick={() => i18n.changeLanguage('en')}>{t("languages.english") }</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}