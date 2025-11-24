import { useTranslation } from "react-i18next"

export default function TimeLine() {

    const { t } = useTranslation();

    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <div className="text-center text-zinc-400 font-semibold text-base border-b border-gray-500 pb-5 mx-1 md:mx-20 md:text-lg">
                <p>{t("experience.title")}</p>
            </div>
            <div className="mt-10">
                <ul
                    className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                >
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-slate-50"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div
                            className="timeline-start mb-10 text-xs md:text-base md:text-end"
                        >
                            <time className="font-mono italic text-zinc-400">
                                {t("experience.bkd.date")}
                            </time>
                            <div className="font-black font-mono text-sm text-slate-50 md:text-lg">
                                BKD
                            </div>
                            <p
                                className="font-mono italic text-zinc-400 text-xs md:text-base"
                            >
                                {t("experience.bkd.work")}
                            </p>
                            <p className="text-base md:text-base text-slate-50">
                                {t("experience.bkd.description")}
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-slate-50"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="timeline-end max-w-140 mb-10 text-xs md:text-base">
                            <time className="font-mono italic text-zinc-400">
                                {t("experience.mrHomero.date")}
                            </time>
                            <div className="font-black font-mono text-sm text-slate-50 md:text-lg">
                                Mr.Homero Web
                            </div>
                            <p className="font-mono italic text-zinc-400">
                                {t("experience.mrHomero.work")}
                            </p>
                            <p className="text-base md:text-base text-slate-50">
                                {t("experience.mrHomero.description")}
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-slate-50"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div
                            className="timeline-start mb-10 text-xs md:text-base md:text-end"
                        >
                            <time className="font-mono italic text-zinc-400">
                                {t("experience.mrHomeroApp.date")}
                            </time>
                            <div className="font-black font-mono text-sm text-slate-50 md:text-lg">
                                Mr.Homero App
                            </div>
                            <p className="font-mono italic text-zinc-400">
                                {t("experience.mrHomeroApp.work")}
                            </p>
                            <p className="text-base md:text-base text-slate-50">
                                {t("experience.mrHomeroApp.description")}
                            </p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    )
}