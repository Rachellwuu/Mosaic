interface StockData{
  symbol:string
  name:string
  price:number
  volume:number
  dayLow:number
  dayHigh:number
  yearHigh:number
  yearLow:number
  changePercentage:number
  pe:number
  revenue:number
}
type StockCard={
    data:StockData|null
}
export default function StockCard({data}:StockCard){
    if (!data) return null
    return (
    <div className = "w-full mt-6">
        <div className ="flex justify-between py-2">
            <div >
            <h2 className = "font-mono text-3xl font-medium text-white mb-4">{data.symbol}</h2>
            </div>
            <div>
            <p className="font-mono text-2xl text-white">${data.price.toFixed(2)}</p>
            <p className={`font-mono text-sm ${data.changePercentage>= 0 ? 'text-green-400':'text-red-400'}`}>{data.changePercentage.toFixed(2)}% today</p>
            </div>
        </div>
        <div className = "grid grid-cols-2 mx-auto gap-3 w-full ">
            
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">P/E ratio</p>
            <p className = "text-white font-mono text-lg ">{data.pe ? data.pe.toFixed(2) : "--"}</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">revenue YoY</p>
            <p className = "text-white font-mono text-lg ">{data.revenue ? (data.revenue *100).toFixed(1)+"%" : "--"}</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">52w high</p>
            <p className = "text-white font-mono text-lg ">{data.yearHigh}</p>
        </div>
        <div className = "bg-[#161920] border border-[#1e2228] rounded-lg p-4">
            <p className ="text-zinc-500 mb-1 text-sm">52w low</p>
            <p className = "text-white font-mono text-lg ">{data.yearLow}</p>
        </div>
        </div>
    </div>
    )
}