export default function TimeLine() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
            <div className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 ">
                <p>Experiencia</p>
            </div>
            <div className="mt-10">
                <ul
                    class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                >
                    <li>
                        <div class="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div
                            class="timeline-start mb-10 text-xs md:text-base md:text-end"
                        >
                            <time class="font-mono italic text-zinc-400">
                                Marzo 2022 - Noviembre 2023
                            </time>
                            <div class="font-black font-mono text-sm md:text-lg">
                                BKD
                            </div>
                            <p
                                class="font-mono italic text-zinc-400 text-xs md:text-base"
                            >
                                Técnico en Programación de Software
                            </p>
                            <p class="text-base md:text-base text-slate-50">
                                Desarrollé un sitio web para la gestión de ventas,
                                catálogo y compra de medicamentos para una droguería.
                                Este proyecto permitió digitalizar los procesos internos
                                de la empresa, facilitar la venta en línea y mejorar la
                                visibilidad del negocio, incluyendo la opción de
                                domicilios para los clientes.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="timeline-end max-w-140 mb-10 text-xs md:text-base">
                            <time class="font-mono italic text-zinc-400">
                                febrero 2024 - Marzo 2025</time
                            >
                            <div class="font-black font-mono text-sm md:text-lg">
                                Mr.Homero Web
                            </div>
                            <p class="font-mono italic text-zinc-400">
                                Tecnólogo en Análisis y Desarrollo de Software
                            </p>
                            <p class="text-base md:text-base text-slate-50">
                                Junto a mi equipo, desarrollamos un sitio web para un
                                restaurante de comida rápida como parte del proyecto Mr.
                                Homero. El objetivo fue mejorar la gestión de ventas,
                                fortalecer la fidelización de clientes y optimizar el
                                manejo de pedidos, aportando soluciones tecnológicas
                                adaptadas a las necesidades del negocio.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div
                            class="timeline-start mb-10 text-xs md:text-base md:text-end"
                        >
                            <time class="font-mono italic text-zinc-400">
                                Marzo 2025 - Mayo 2025</time
                            >
                            <div class="font-black font-mono text-sm md:text-lg">
                                Mr.Homero App
                            </div>
                            <p class="font-mono italic text-zinc-400">
                                Tecnólogo en Análisis y Desarrollo de Software
                            </p>
                            <p class="text-base md:text-base text-slate-50">
                                Desarrollamos una aplicación móvil para el mismo
                                restaurante del proyecto Mr. Homero, reutilizando la API
                                existente para gestionar ventas, fidelización de
                                clientes y manejo de pedidos. Esta app complementa el
                                sitio web, ofreciendo una experiencia más accesible y
                                optimizada para dispositivos móviles.
                            </p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    )
}