type StockCard={
    ticker:string
}
export default function StockCard({ticker}:StockCard){
    return (
    <div className = "w-full max-w-md mt-6 items-center">
        <h2 className = "font-mono text-3xl font-medium text-white mb-4">{ticker}</h2>

        <div className = "grid grid-cols-2 mx-auto gap-3 w-full max-w-md">
            
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">P/E ratio</p>
            <p className = "text-white font-mono text-lg ">....</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">revenue YoY</p>
            <p className = "text-white font-mono text-lg ">....</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">52w high</p>
            <p className = "text-white font-mono text-lg ">....</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">52w low</p>
            <p className = "text-white font-mono text-lg ">....</p>
        </div>
        </div>
    </div>
    )
}