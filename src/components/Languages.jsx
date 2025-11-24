import languagesConst from '../const/Languages'
import { useTranslation } from 'react-i18next';

export default function Languages() {
    const firstRow = languagesConst.slice(0, 7);
    const secondRow = languagesConst.slice(7)
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <div className="text-center text-zinc-400 font-semibold text-base border-b border-gray-500 pb-5 mx-1 md:mx-20 md:text-lg">
                <p>{t("technologies.title")}</p>
            </div>

            <div className="flex flex-row align-center justify-center gap-3 mt-10 flex-wrap md:gap-10">
                {firstRow.map((l) => (
                    <div className="flex flex-col items-center gap-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300 ease-in-out md:hover:grayscale-0 md:grayscale" key={l.name}>
                        <img className='flex w-8 h-8 md:w-12 md:h-12' src={l.icon} alt="" />
                        <span className='text-[10px] text-center text-zinc-400 md:font-semibold md:text-sm'>{l.name}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-row align-center justify-center gap-3 mt-5 flex-wrap md:gap-10">
                {secondRow.map((l) => (
                    <div className="flex flex-col items-center gap-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300 ease-in-out md:hover:grayscale-0 md:grayscale" key={l.name}>
                        <img className='flex w-7 h-7 md:w-12 md:h-12' src={l.icon} alt="" />
                        <span className='text-center text-zinc-400 text-[11px] md:font-semibold md:text-sm'>{l.name}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}