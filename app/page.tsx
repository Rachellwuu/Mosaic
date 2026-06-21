"use client"
import SearchBar from "@/components/SearchBar"
import StockCard from "@/components/StockCard"
import PriceChart from "@/components/PriceChart"
import {PriceData} from "@/components/PriceChart"
import AnalysisCard from "@/components/AnalysisCard"
import {useState} from "react"
import ThesisForm from "@/components/ThesisForm"

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
  priceHistory: PriceData[]
  
}

export default function Home() {
  const[ticker,setTicker] = useState("");
  const[submit, setSubmit] = useState("");
  const[stockData, setStockData] = useState<StockData|null>(null)
  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] =useState("")
  const[analysis,setAnalysis]= useState<any>(null)
  const handleAnalyze = async () => {
  setIsLoading(true)
  setSubmit(ticker)
  setError("")
  setStockData(null)
  setAnalysis(null)
  try {
    if (!ticker.trim()) return
    const response = await fetch(`/api/stock?ticker=${ticker}`)
    const data = await response.json()
    if (data.error){
      setError(data.error)
    }
    else{
      setStockData(data)
      const cresponse = await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
      const cdata = await cresponse.json()
      setAnalysis(cdata)
    }
  } catch (err) {
    setError("Error: Invalid or unavailable ticker. Try again.")
  } finally {
    setIsLoading(false)
  }
}

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center pt-30 px-4">
      <h1 className="text-4xl font-mono font-medium text-white mb-2">
        mosaic
      </h1>
      <p className="text-zinc-500 text-sm mb-8">
        stock analyzer and thesis tracker
      </p>
      <div className = "w-full max-w-2xl  flex flex-col items-center ">
        <SearchBar ticker ={ticker} onChange ={(e)=>setTicker(e.target.value)} onSubmit ={handleAnalyze}/>
        {submit && (
          <div className = "w-full flex flex-col items-center ">
            
            { isLoading?(<p className = "p-4 text-zinc-500 font-mono text-xs">analyzing {submit}... (10 seconds)</p>

            ):error?(<p className = "text-red-500 font-mono text-sm mt-4">{error}</p>
      
            ):(
            
              <div className = "w-full flex-col items-center">
              <StockCard data = {stockData} />
              <PriceChart data = {stockData?.priceHistory??[]}/>
              {analysis && (<div className="w-full mt-8">
              <AnalysisCard bull={analysis.bull} bear={analysis.bear} verdict={analysis.verdict} reasoning={analysis.reasoning} />
              <ThesisForm ticker ={submit}/>
              </div>

            
            ) }

              </div>
            
            )
  }
          </div>
        )
        }
</div>
    </main>
  )
}
