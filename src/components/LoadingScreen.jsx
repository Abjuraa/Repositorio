import bg from "../assets/bg/topography.svg";

export default function LoadingScreen() {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg z-50"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay",
            }}
        >
            <div className="flex flex-col items-center gap-6 animate-fadeIn">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-400 border-t-transparent animate-spin"></div>
                </div>

                <p className="text-white text-xl font-semibold tracking-wide animate-pulse">
                    Cargando...
                </p>
            </div>
        </div>
    );
}
