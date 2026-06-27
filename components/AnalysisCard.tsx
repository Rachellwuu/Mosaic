type AnalysisCardProp={
    bull:string[]
    bear:string[]
    verdict:string
    reasoning:string
}
export default function AnalysisCard({ bull, bear, verdict, reasoning }: AnalysisCardProp){
    return(
        <div className = "grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-3 p-4">
            <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
                <p className = " text-green-500 text-xl font-mono mb-1">BULL CASE</p>
                {bull.map((reason, index) => (
                    <p key={index} className="text-sm text-zinc-400 font-mono mb-2">{reason}</p>))}

            </div>
            <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
                <p className = "text-red-500 text-xl font-mono mb-1">BEAR CASE</p>
                {bear.map((reason, index) => (
                    <p key={index} className="text-sm font-mono text-zinc-400 mb-2">{reason}</p>))}
            </div>
            <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4 col-span-1 md:col-span-2">
                <p className = "text-xl font-mono text-white mb-1">FINAL CONVICTION FROM CLAUDE</p>
                <p className = "text-xs text-zinc-500 font-mono mb-1">*this is not financial advice</p>
                
                    <p className="text-xl text-white font-mono mb-2">{verdict}</p>
                    <p className="text-sm text-zinc-400 font-mono mb-2">{reasoning}</p>
            </div>
        </div>
    )

}