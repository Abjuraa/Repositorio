import { Resend } from 'resend'

export default function ContactMe() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 mt-20 mb-20">
            <p className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 ">Contactame</p>

            <div className="flex flex-col border border-zinc-800 rounded-lg my-20 p-10 gap-5 mx-20">
                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Correo</h1>
                    <input
                        className="border border-zinc-700 text-zinc-400 rounded-lg py-2 px-3"
                        type="text"
                        placeholder="Correo"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Asunto</h1>

                    <input
                        className="border border-zinc-700 text-zinc-400 rounded-lg py-2 px-3"
                        type="text"
                        placeholder="Asunto"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Mensaje</h1>
                <textarea
                        className='flex border border-zinc-700 text-zinc-400 rounded-lg px-3 min-h-[150px] py-2'
                        type="text"
                        name=""
                        id=""
                        placeholder='Escribe tu mensaje'
                    />
                </div>
                <div className="flex flex-col">
                    <button className="bg-slate-50 text-slate-900 px-4 py-2 rounded-md">Enviar</button>
                </div>


            </div>
        </div>


    )
}