export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-mono font-medium text-white mb-2">
        mosaic
      </h1>
      <p className="text-zinc-500 text-sm mb-8">
        stock analyzer and thesis builder
      </p>
      <div className="flex gap-2 w-full max-w-md">
        <input
          className="flex-1 bg-[#161920] border border-[#1e2228] rounded-lg px-4 py-2 text-sm font-mono text-white outline-none placeholder-zinc-600"
          placeholder="enter ticker e.g. NVDA"
        />
        <button className="bg-green-400 text-black text-sm font-medium px-4 py-2 rounded-lg">
          analyze
        </button>
      </div>
    </main>
  )
}