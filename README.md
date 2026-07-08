# Mosaic

Full-stack AI stock analyzer and investment thesis tracker. Search any ticker to pull live financial data and a price chart, get an AI-generated bull and bear case analysis from Claude, and write your own investment thesis to track against real-time prices over time.

**Live demo:** https://mosaic-three-nu.vercel.app/

## Why I built this

Many investors make the mistake of creating vague opinions about their stock holdings instead of a concrete thesis they can evaluate later. Mosaic guides investors to work from a structure rather than open-ended opinions — to write a thesis with a condition and a testable date, so they can see if the call plays out. It's a tool for building accountability and skill early in the investment journey.

## Features

- **Live financial data** — current price, P/E ratio, revenue growth YoY, and 52-week range from the Financial Modeling Prep API
- **90-day price history chart** — price data from FMP rendered with Recharts
- **AI bull/bear analysis** — sends current financial data to the Claude API, which returns a bull case, bear case, and final verdict
- **Thesis tracker** — users write a thesis, condition, and date for a specific ticker and save it for tracking against live prices
- **Authentication** — user data is isolated through email/password auth via Supabase

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js, TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Financial data | Financial Modeling Prep API |
| AI analysis | Anthropic Claude API |
| Database & Auth | Supabase |
| Deployment | Vercel |

## Running locally

​```bash
git clone https://github.com/Rachellwuu/Mosaic.git
cd Mosaic
npm install
​```

Create a `.env.local` file in the root with your own keys:

​```
FMP_API_KEY=your_fmp_key
ANTHRO_API_KEY=your_anthropic_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
​```

Then run the dev server:

​```bash
npm run dev
​```

Open http://localhost:3000.

