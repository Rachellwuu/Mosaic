"use client"
type SearchBarProps ={
    ticker:string
    onChange: (value:string)=> void
    onSubmit:()=>void
}
export default function SearchBar({ticker,onChange,onSubmit}:SearchBarProps){
    return(
    <div className="flex gap-2 w-full max-w-md">
        <input
          value = {ticker} onChange ={onChange} className="flex-1 bg-[#161920] border border-[#1e2228] rounded-lg px-4 py-2 text-sm font-mono text-white outline-none placeholder-zinc-600"
          placeholder="enter ticker e.g. AMD, MSFT"
        />
        <button onClick = {onSubmit} className="bg-green-500 text-black text-sm font-medium font-mono px-2 py-2 rounded-lg">
          analyze
        </button>
        
      </div>
      
    )
}
