"use client"
import {useState} from "react"
import {supabase} from "@/app/lib/supabase"
import {useRouter} from "next/navigation"

export default function LoginPage(){
    const router= useRouter()
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("");
    const[error, setError] = useState("")
    const handleSignup = async()=> {
        const {error} = await supabase.auth.signUp({email,password})
        if(error){
            setError(error.message)
        }
        else{
            setError("Check your email to comfirm, then log in")
        }

    }
    const handleSignIn =  async()=> {
        const {error} = await supabase.auth.signInWithPassword({email,password})
        if(error){
            setError(error.message)
        }
        else{
           router.push("/")
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
      <div className = "w-full max-w-sm   flex flex-col items-center gap-3">
            <input placeholder="email" value ={email} onChange ={(e)=>setEmail(e.target.value)} className ="bg-[#161920] px-4 py-2 font-mono outline-none w-full rounded-lg"/>
            <input placeholder="password" type ="password" value = {password} onChange={(e)=>setPassword(e.target.value)} className ="bg-[#161920] px-4 py-2 font-mono outline-none w-full rounded-lg"/>
            <button className ="font-mono px-4 py-2 bg-green-500 text-black rounded-lg" onClick ={handleSignIn}>
                login
            </button>
            <button className="font-mono px-4 py-2 bg-[#161920] border border-[#1e2228] text-white rounded-lg w-full" onClick={handleSignup}>
                sign up
                </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        </main>

    )

}