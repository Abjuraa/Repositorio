import { useState } from 'react';
import ProjectsConst from '../const/Projects';
import Github from '../assets/icons/github_dark.svg';
import { useTranslation } from 'react-i18next';

export default function Projects() {

    const { t } = useTranslation();

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <p className="text-center text-zinc-400 font-semibold text-base border-b border-gray-500 pb-5 mx-1 md:mx-20 md:text-lg">
                {t("projects.title")}
            </p>
            <div className="flex flex-col mt-10 mx-auto md:mx-40">
                {ProjectsConst.map((p) => {
                    return (
                        <div key={p.id} className="flex flex-col  border border-1 border-zinc-800 rounded-xl bg-linear-400 from-zinc-900 to-zinc-950 mb-5 hover:scale-102 transition-transform md:flex-row">
                            <img src={p.image} alt="" className="flex w-70 h-50 rounded-lg my-5 mx-5 object-cover" />

                            <div className="flex flex-col">
                                <div className="flex flex-col justify-between items-center md:mb-2 md:mt-5 md:flex-row">
                                    <h2 className="text-2xl font-bold text-zinc-400 mb-3 md:mb-0 md:max-w-[200px]">{p.name}</h2>
                                    <div className="flex flex-row gap-2 flex-wrap justify-start max-w-sm mx-5 md:mx-3 my-2">
                                        {p.technologies.map((t) => (
                                            <span className="flex bg-zinc-900 border-1 border-zinc-800 rounded-xl px-3 text-[12px] md:text-sm p-1 font-bold text-zinc-400">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className={`flex flex-row mt-5 overflow-hidden transition-all duration-300 ease-in-out`}
                                >
                                    <p className='text-zinc-400 font-semibold text-sm mx-5 md:mx-0 md:text-sm md:pe-3'>
                                        {t(p.description)}
                                    </p>
                                </div>
                                <div className="flex flex-row my-5 gap-5 justify-center md:justify-start md:gap-3">
                                    {p.linkDemo
                                        ? (
                                            <a
                                                href={p.linkDemo}
                                                target='_blank'
                                                className='bg-zinc-100 border-1 border-zinc-800 rounded-xl p-2 font-bold font-mono text-sm w-30 h-10 text-center text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-zinc-100'>
                                                Web
                                            </a>
                                        ) : null
                                    }

                                    <a
                                        href={p.linkCode}
                                        target='_blank'
                                        className='rounded-xl border-1 border-zinc-800 p-2 font-bold font-mono text-sm w-30 h-10 text-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors'>
                                        {t("projects.code")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <a
                    className='flex flex-row border border-zinc-800 bg-linear-65 from-zinc-900 to-zinc-950 rounded-xl justify-center items-center gap-5 hover:bg-zinc-900 p-2 md:mx-80'
                    href="https://github.com/Abjuraa?tab=repositories"
                    target='_blank'
                >
                    <p className='text-center text-zinc-400 font-semibold'>{t("projects.github")}</p>
                    <img src={Github} alt="" className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}