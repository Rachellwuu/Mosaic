"use client"
import SearchBar from "@/components/SearchBar"
import StockCard from "@/components/StockCard"
import {useState} from "react"
export default function Home() {
  const[ticker,setTicker] = useState("");
  const[submit, setSubmit] = useState("");
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-mono font-medium text-white mb-2">
        mosaic
      </h1>
      <p className="text-zinc-500 text-sm mb-8">
        stock analyzer and thesis builder
      </p>
      <SearchBar ticker ={ticker} onChange ={(e)=>setTicker(e.target.value)} onSubmit ={()=> setSubmit(ticker)}/>
      {submit && (
        <div>
        <p className = "p-4 text-zinc-500 font-mono text-xs">analyzing {submit}...</p>
        <StockCard ticker = {submit} />
        </div>
      )
      }

    </main>
  )
}
