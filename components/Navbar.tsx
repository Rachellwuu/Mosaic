export default function Navbar(){
    return (
    <div className = "bg-[#0d0f12] flex justify-between items-center px-4 py-2">
        <div><p className ="text-white font-mono font-medium text-lg"> mosaic</p></div>
        <div className = "flex gap-4">
        <p className ="text-zinc-500 underline font-mono text-sm"> analyze </p>
        <p className = "text-zinc-500 underline  font-mono text-sm">thesis</p>
        </div>
    </div>
    )
}
