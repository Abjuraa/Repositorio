import { useState } from 'react';
import ProjectsConst from '../const/Projects';
import Github from '../assets/icons/github_dark.svg';

export default function Projects() {

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <p className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 ">
                Proyectos
            </p>
            <div className="flex flex-col mt-10 mx-40 ">
                {ProjectsConst.map((p) => {
                    return (
                        <div key={p.id} className="flex flex-row border border-1 border-zinc-800 rounded-xl bg-linear-400 from-zinc-900 to-zinc-950 mb-5 hover:scale-102 transition-transform">
                            <img src={p.image} alt="" className="flex w-70 h-50 rounded-lg my-5 mx-5 object-cover" />

                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between items-center mb-2 mt-5">
                                    <h2 className="text-2xl font-bold max-w-[200px] text-zinc-400">{p.name}</h2>
                                    <div className="flex flex-row gap-2 flex-wrap justify-start max-w-sm mx-3 my-2">
                                        {p.technologies.map((t) => (
                                            <span className="flex bg-zinc-900 border-1 border-zinc-800 rounded-xl px-3 text-sm p-1 font-bold text-zinc-400">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className={`flex flex-row mt-5 overflow-hidden transition-all duration-300 ease-in-out`}
                                >
                                    <p className='text-zinc-400 text-sm pe-3 font-semibold'>
                                        {p.description}
                                    </p>
                                </div>
                                <div className="flex flex-row my-5 gap-3">
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
                                        Codigo
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <a
                    className='flex flex-row border border-zinc-800 bg-linear-65 from-zinc-900 to-zinc-950 rounded-xl justify-center items-center gap-5 mx-80 hover:bg-zinc-900 p-2'
                    href="https://github.com/Abjuraa?tab=repositories"
                    target='_blank'
                >
                    <p className='text-center text-zinc-400 font-semibold'>Mas proyectos en github</p>
                    <img src={Github} alt="" className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}