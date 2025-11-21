import { useState } from 'react'
import Alert from './Alert';

export default function ContactMe() {
    const [correo, setCorreo] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, asunto, mensaje }),
        })

        const data = await response.json();

        if (data.success) {
            setAlert({
                color: "alert-success",
                message: 'Correo enviado exitosamente',
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
            setCorreo('');
            setAsunto('');
            setMensaje('');
        }
        else if (!correo || !asunto || !mensaje) {
            setAlert({
                color: "alert-warning",
                message: 'Todos los campos son obligatorios',
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            })
        }
        else {
            setAlert({
                color: 'alert-error',
                message: 'Error al enviar el correo',
                icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            })
            console.log("Error al enviar el correo", data);
        }

        setTimeout(() => setAlert(null), 5000);
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-6 mt-20 mb-20">
            <p className="text-center text-zinc-400 font-semibold text-lg border-b border-gray-500 pb-5 mx-20 ">Contactame</p>

            {alert && < Alert message={alert.message} icon={alert.icon} />}

            <form onSubmit={handleSubmit} className="flex flex-col border bg-linear-400 from-zinc-900 to-zinc-950 border-zinc-800 rounded-lg my-20 p-10 gap-5 mx-20">
                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Correo</h1>
                    <input
                        className="border border-zinc-700 text-zinc-400 rounded-lg py-2 px-3"
                        type="email"
                        placeholder="Ingresa tu correo"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Asunto</h1>

                    <input
                        className="border border-zinc-700 text-zinc-400 rounded-lg py-2 px-3"
                        type="text"
                        placeholder="Ingresa el asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-400 font-semibold text-lg'>Mensaje</h1>
                    <textarea
                        className='flex border border-zinc-700 text-zinc-400 rounded-lg px-3 min-h-[150px] py-2'
                        placeholder='Escribe tu mensaje'
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <button
                        className=" flex items-center justify-center bg-slate-50 text-slate-900 px-4 py-2 rounded-md font-semibold hover:bg-slate-100 cursor-pointer gap-3 hover:scale-102 transition-transform"
                        type='submit'
                    >Enviar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <defs>
                                <path id="SVGr77DHd6N" fill="currentColor" d="m7.692 11.897l1.41.47c.932.31 1.397.466 1.731.8s.49.8.8 1.73l.47 1.41c.784 2.354 1.176 3.53 1.897 3.53c.72 0 1.113-1.176 1.897-3.53l2.838-8.512c.552-1.656.828-2.484.391-2.921s-1.265-.161-2.92.39l-8.515 2.84C5.34 8.887 4.162 9.279 4.162 10s1.177 1.113 3.53 1.897" />
                            </defs>
                            <use href="#SVGr77DHd6N" fill-opacity="0.25" />
                            <use href="#SVGr77DHd6N" fill-opacity="0.25" />
                            <path fill="currentColor" d="m9.526 13.842l-2.062-.687a1 1 0 0 0-.87.116l-1.09.726a.8.8 0 0 0 .25 1.442l1.955.488a.5.5 0 0 1 .364.364l.488 1.955a.8.8 0 0 0 1.442.25l.726-1.09a1 1 0 0 0 .116-.87l-.687-2.062a1 1 0 0 0-.632-.632" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}