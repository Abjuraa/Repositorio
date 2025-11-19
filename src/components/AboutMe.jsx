import MetalSonic from '../assets/img/MetalSonic.gif?link';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {

    const { t, i18n } = useTranslation();
    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-40">
            <p
                class="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 "
            >
                { t("aboutMe.title") }
            </p>

            <div className="flex flex-row justify-center align-center mt-10">
                <div className="flex justify-center align-center mr-20">
                    <img src={MetalSonic} alt="Metal Sonic" class="w-45 md:w-80" />
                </div>

                <div class="flex flex-col justify-center align-center gap-2 w-80 md:w-110">
                    <div class="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div class="collapse-title font-bold text-mono">
                            <p class="text-zinc-400">prueba</p>
                        </div>
                        <div class="collapse-content text-sm">contenido</div>
                    </div>
                    <div class="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div class="collapse-title font-bold text-mono">
                            <p class="text-zinc-400">prueba</p>
                        </div>
                        <div class="collapse-content text-sm">prueba</div>
                    </div>
                    <div class="collapse bg-linear-250 from-zinc-900 to-zinc-950 rounded-xl">
                        <input type="radio" name="my-accordion-1" />
                        <div class="collapse-title font-bold text-mono">
                            <p class="text-zinc-400">prueba</p>
                        </div>
                        <div class="collapse-content text-sm">prueba</div>
                    </div>
                </div>
            </div>
        </div >
    )
}