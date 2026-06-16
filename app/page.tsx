"use client"
import SearchBar from "@/components/SearchBar"
import StockCard from "@/components/StockCard"
import {useState} from "react"

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

export default function Home() {
  const[ticker,setTicker] = useState("");
  const[submit, setSubmit] = useState("");
  const[stockData, setStockData] = useState<StockData|null>(null)
  const[isLoading, setIsLoading] = useState(false)
  const handleAnalyze = async () => {
  setIsLoading(true)
  setSubmit(ticker)
  try {
    const response = await fetch(`/api/stock?ticker=${ticker}`)
    const data = await response.json()
    console.log(data)
    setStockData(data)
  } catch (error) {
    console.log("error:", error)
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
        stock analyzer and thesis builder
      </p>
      <SearchBar ticker ={ticker} onChange ={(e)=>setTicker(e.target.value)} onSubmit ={handleAnalyze}/>
      {submit && (
        <div className = "w-full flex flex-col items-center">
          { isLoading?(<p className = "p-4 text-zinc-500 font-mono text-xs">analyzing {submit}...</p>):(
          
          <StockCard data = {stockData} />)
}
        </div>
      )
      }

    </main>
  )
}
