"use client"
import {useState} from "react"
import {useEffect} from "react"
import { supabase } from "@/app/lib/supabase"
import {useRouter} from "next/navigation"

export default function ThesisPage() {
    const[theses,setTheses]= useState<any[]>([]);
    const[loading, setLoading]=useState(true)
    const router = useRouter()
    const fetchTheses =async () =>{
        const{data:{user}}= await supabase.auth.getUser()
        if(!user){
            router.push("/login")
            return
        }
        const {data, error} = await supabase.from("theses").select("*").eq("user_id",user.id).order("id",{ascending:false})
        

        if (!error && data){
            const prices = await Promise.all(

                data.map(async(t) => {
                    const response = await fetch(`/api/stock?ticker=${t.ticker}`)
                    const stockData = await response.json()
                    return {...t,currentPrice:stockData.price}
                })
            )
            setTheses(prices)
            setLoading(false)
        }
    }
    const handleDelete= async(id:number) =>{

        const{error} = await supabase.from("theses").delete().eq("id",id)
        if(!error){
            fetchTheses()
        }
    }

    
    useEffect(()=>{fetchTheses()},[])
    return (
        <main className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center pt-30 px-4">
            <h1 className = "text-4xl font-mono font-medium text-white mb-2">
                thesis log
            </h1>
            <p className = "text-zinc-500">
                theses tracking and monitoring space
            </p>
            {loading ? (<p className="text-zinc-500 font-mono text-sm mt-6">loading your theses...</p>) : theses.length === 0 ? (<p className="text-zinc-500 font-mono text-sm mt-6">no theses yet... analyze a stock and write one</p>) : (
            <div className ="w-full max-w-4xl flex-col gap-4 mt-6 grid grid-cols-1 md:grid-cols-2">
                {theses.map((t)=>(
                    <div key={t.id} className ="border border-zinc-500 bg-[#161920] rounded-lg p-4 w-full">
                        <p className="text-white font-mono text-3xl">{t.ticker}</p>
                        <p className="text-zinc-400 text-sm mb-3">{t.thesis}</p>
                        <p className="text-zinc-500 text-xs font-mono mb-1">condition: {t.condition}</p>
                        <p className="text-zinc-500 text-xs font-mono mb-1">target date: {t.target_date}</p>
                        <p className="text-zinc-500 text-xs font-mono">saved at: ${t.price_at_save}</p>
                        <p className="text-zinc-500 text-xs font-mono">current: ${t.currentPrice?.toFixed(2)}</p>
                        <p className={`text-xs font-mono mt-1 ${t.currentPrice >= t.price_at_save ? 'text-green-400' : 'text-red-400'}`}>{(((t.currentPrice - t.price_at_save) / t.price_at_save) * 100).toFixed(2)}% since saved
  </p>
                        <button className ="bg-red-500 text-black mt-4 p-2 rounded-lg font-mono" onClick = {()=>handleDelete(t.id)} >delete</button>
                    </div>
                    
                )
            )}
            </div>)}
        </main>
    )
}
