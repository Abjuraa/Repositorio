export default function Alert({ message, icon }) {
    return (
        <div role="alert" className={`flex fixed bottom-5 right-5 alert bg-linear-400 from-zinc-900 to-zinc-950 border border-zinc-800 text-zinc-400 px-4 py-3 rounded-lg gap-3 w-auto max-w-sm shadow-lg hover:scale-102 transition-transform`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
            </svg>
            <span className="font-semibold">{message}</span>
        </div>
    )
}