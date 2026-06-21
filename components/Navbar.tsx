import Link from "next/link"
export default function Navbar(){
    return (
    <div className = "bg-[#0d0f12] flex justify-between items-center px-4 py-2">
        <div><p className ="text-white font-mono font-medium text-lg"> mosaic</p></div>
        <div className = "flex gap-4">
        <Link href= "/" className ="text-zinc-500 underline font-mono text-sm"> analyze </Link>
        <Link href="/thesis" className = "text-zinc-500 underline  font-mono text-sm">thesis</Link>
        </div>
    </div>
    )
}
