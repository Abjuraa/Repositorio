import Vercel from "../assets/icons/vercel_wordmark_dark.svg";

export default function Footer() {
    return (
        <div className="mx-5 md:mx-50">
            <div className="flex justify-between border-t-2 border-x-2 border-zinc-800 rounded-t-xl px-5 py-4">
                <div className="flex gap-1">
                    <p className="text-zinc-400 text-xs">Deployed in</p>
                    <span><img src={Vercel} width={75} alt="" /></span>
                </div>
                <p className="text-zinc-400 text-sm">Bryam ©2025</p>
            </div>
        </div>
    )
}