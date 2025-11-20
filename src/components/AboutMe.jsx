import MetalSonic from '../assets/img/MetalSonic.gif?link';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {

    const { t, i18n } = useTranslation();
    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-40">
            <p
                className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 "
            >
                { t("aboutMe.title") }
            </p>

            <div className="flex flex-row justify-center align-center mt-10">
                <div className="flex justify-center align-center mr-20">
                    <img src={MetalSonic} alt="Metal Sonic" className="w-45 md:w-80" />
                </div>

                <div className="flex flex-col justify-center align-center gap-2 w-80 md:w-110">
                    <div className="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title font-bold text-mono">
                            <p className="text-zinc-400">prueba</p>
                        </div>
                        <div className="collapse-content text-sm text-slate-50">contenido</div>
                    </div>
                    <div className="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title font-bold text-mono">
                            <p className="text-zinc-400">prueba</p>
                        </div>
                        <div className="collapse-content text-sm text-slate-50">prueba</div>
                    </div>
                    <div className="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title font-bold text-mono">
                            <p className="text-zinc-400">prueba</p>
                        </div>
                        <div className="collapse-content text-sm text-slate-50">prueba</div>
                    </div>
                </div>
            </div>
        </div >
    )
}