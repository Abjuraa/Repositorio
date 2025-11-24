import MetalSonic from '../assets/img/MetalSonic.gif?link';
import { useTranslation } from 'react-i18next';
import info from '../const/AboutMe.js';

export default function AboutMe() {

    const { t, i18n } = useTranslation();
    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-30">
            <p
                className="text-center text-zinc-400 font-semibold text-base border-b border-gray-500 pb-5 mx-1 md:mx-20 md:text-lg"
            >
                {t("aboutMe.title")}
            </p>

            <div className="flex flex-col justify-center align-center mt-12 gap-8 md:mt-10 md:flex-row">
                <div className="flex justify-center align-center md:mr-20">
                    <img src={MetalSonic} alt="Metal Sonic" className="w-40 md:w-80" />
                </div>

                <div className="flex flex-col justify-center align-center gap-3 md:w-80 md:gap-2 md:w-110">
                    {info.map((c) => (
                        <div key={c.id} className="border border-zinc-800 collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                            <input type="checkbox" />
                            <div className="collapse-title font-bold text-mono">
                                <p className="text-zinc-400">{t(c.title)}</p>
                            </div>
                            <div className="collapse-content text-sm text-slate-50">{t(c.content)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}