"use client"
import Link from "next/link"
import {useState,useEffect} from "react"
import {supabase} from "@/app/lib/supabase"
import {useRouter} from "next/navigation"

export default function Navbar(){
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    useEffect(()=> {
        supabase.auth.getUser().then(({data})=> {
            setUser(data.user)
        })
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
         })

        return () => {
            listener.subscription.unsubscribe()
         }}, [])
    const handleLogout = async()=>{
        await supabase.auth.signOut()
        setUser(null)
        router.push("/login")
    }
    return (
    <div className = "bg-[#0d0f12] flex justify-between items-center px-4 py-2">
        <div>
            <Link href="/" className ="text-white font-mono font-medium text-lg"> mosaic</Link>
        </div>
        <div className = "flex gap-4">
        <Link href= "/" className ="text-zinc-500 underline font-mono text-sm"> analyze </Link>
        <Link href="/thesis" className = "text-zinc-500 underline  font-mono text-sm">thesis</Link>
        {user ?(
            <button onClick={handleLogout} className = "font-mono text-zinc-500 text-sm">logout</button>
        ):(
            <Link href="/login" className = "font-mono text-zinc-500 text-sm">login</Link>
        )}
        </div>
    </div>
    )
}
