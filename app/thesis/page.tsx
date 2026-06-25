"use client"
import {useState} from "react"
import {useEffect} from "react"
import { supabase } from "@/app/lib/supabase"
export default function ThesisPage() {
    const[theses,setTheses]= useState<any[]>([]);
    const fetchTheses =async () =>{
        const {data, error} = await supabase.from("theses").select("*").order("id",{ascending:false})
        console.log("theses data:", data)
        console.log("theses error:", error)
        if (!error && data){
            setTheses(data)
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
                mosaic thesis log
            </h1>
            <p className = "text-zinc-500">
                theses tracking and monitoring space
            </p>
            <div className ="w-full max-w-4xl flex-col gap-4 mt-6 grid grid-cols-2">
                {theses.map((t)=>(
                    <div key={t.id} className ="border border-zinc-500 bg-[#161920] rounded-lg p-4 w-full">
                        <p className="text-white font-mono text-3xl">{t.ticker}</p>
                        <p className="text-zinc-400 text-sm mb-3">{t.thesis}</p>
                        <p className="text-zinc-500 text-xs font-mono mb-1">condition: {t.condition}</p>
                        <p className="text-zinc-500 text-xs font-mono mb-1">target date: {t.target_date}</p>
                        <p className="text-zinc-500 text-xs font-mono">saved at: ${t.price_at_save}</p>
                        <button className ="bg-red-500 text-black mt-4 p-2 rounded-lg font-mono" onClick = {()=>handleDelete(t.id)} >delete</button>
                    </div>
                    
                )
            )}
            </div>
        </main>
    )
}
