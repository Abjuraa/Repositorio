import languagesConst from '../const/Languages'
import { useTranslation } from 'react-i18next';

export default function Languages() {
    const firstRow = languagesConst.slice(0, 7);
    const secondRow = languagesConst.slice(7)
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <div className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 ">
                <p>{ t("technologies.title")}</p>
            </div>
            <div className="flex flex-row align-center justify-center gap-10 mt-10 flex-wrap">
                {firstRow.map((l) => (
                    <div className="flex flex-col grayscale items-center gap-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-0" key={l.name}>
                        <img className='flex w-12 h-12' src={l.icon} alt="" />
                        <span className='font-semibold text-sm text-center text-zinc-400'>{l.name}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-row align-center justify-center gap-10 mt-5 flex-wrap">
                {secondRow.map((l) => (
                    <div className="flex flex-col grayscale items-center gap-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-0" key={l.name}>
                        <img className='flex w-12 h-12' src={l.icon} alt="" />
                        <span className='font-semibold text-sm text-center text-zinc-400'>{l.name}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}