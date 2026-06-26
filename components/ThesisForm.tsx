import {useState} from "react"
import { supabase } from "@/app/lib/supabase"
type ThesisFormProp={
    ticker:string
    currentPrice: number
}
export default function ThesisForm({ticker, currentPrice}:ThesisFormProp){
    const[thesis,setThesis]= useState("");
    const[condition,setCondition]= useState("")
    const[date,setDate] = useState("")
    const[save,setSave]= useState(false)
    const handleSave = async()=>{
        const {data:{user}}= await supabase.auth.getUser()
        if(!user){
            return
        }
           const{error} = await supabase.from("theses").insert([{ticker:ticker, thesis:thesis, condition:condition, target_date: date, price_at_save:currentPrice,user_id:user.id}])
           console.log("Supabase error:", error)
           if (!error){
            setSave(true)
           }
        }
    return (
        
        <div className ="bg-[#161920] border border-[#1e2228] rounded-lg p-4 w-full">
            <p className = "text-zinc-500 font-mono text-sm mb-2 p-2">My Thesis</p>
        
            <textarea className = "bg-[#0d0f12] w-full outline-none border rounded-lg font-mono p-2 text-white" value ={thesis} placeholder={`Enter your thesis on ticker ${ticker}`} onChange ={(e)=> setThesis(e.target.value)}></textarea>
            <p  className = "text-zinc-500 font-mono text-sm mb-2 p-2">Condition</p>
            <input className = "bg-[#0d0f12] w-full outline-none border rounded-lg font-mono p-2 text-white" value={condition} placeholder={"Enter condition"} onChange= {(e)=> setCondition(e.target.value)}></input>
            <p  className = "text-zinc-500 font-mono text-sm mb-2 p-2">Date</p>
            <input className = "bg-[#0d0f12] w-full outline-none border rounded-lg font-mono p-2 text-white" type ="date" value ={date} onChange ={(e)=> setDate(e.target.value)}></input>
            <button  className = " bg-green-400 font-mono text-sm px-4 py-2 rounded-lg mt-6" onClick={handleSave}>save</button>
            {save && <p className=" text-green-400 text-sm mt-2">saved!</p>}
        </div>    
    )
}