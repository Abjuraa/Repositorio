import React from 'react';
import Github from '../assets/icons/GitHub';
import Linkedin from '../assets/icons/LinkedIn';
import Instagram from '../assets/icons/Instagram';
import { useTranslation } from 'react-i18next';
import Typewriter from './Typewriter';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-6xl mx-auto px-6 mt-30 md:mt-40">
            <div className="flex flex-col gap-14 md:flex-row md:justify-between md:items-center md:gap-20">

                <div className="flex flex-col md:w-[1200px]">
                    <p className="text-sm font-semibold pb-4 text-gray-400 md:text-xl md:font-bold">{t("hero.iam")}</p>
                    <Typewriter />
                    <div className="flex flex-row gap-4 pt-10">
                        <a href="https://github.com/Abjuraa" className='icon-color' target='_blank'><Github width={30} height={30} /></a>
                        <a href="https://www.linkedin.com/in/bryam-casta%C3%B1eda-cuervo-7337482a3/" className='icon-color' target='_blank'><Linkedin width={30} height={30} /></a>
                        <a href="https://www.instagram.com/_abjura/" className='icon-color' target='_blank'><Instagram width={30} height={30} /></a>
                    </div>
                </div>

                <div className="flex flex-col max-w-md">
                    <h1 className="text-base font-semibold md:text-lg md:font-semibold text-gray-400">{t("hero.presentation")}</h1>

                </div>

            </div>
        </div>
    );
}
