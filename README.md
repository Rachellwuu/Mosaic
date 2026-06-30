#MOSAIC
full stack AI stock analyzer and investment thesis tracker. Search any ticker to pull live financial data and a price chart, get a AI generated bull and bear case analysis from Claude, and write your own investment thesis and track it against real time prices over time.
Live demo: https://mosaic-rachel9.vercel.app/

#Features
Live financial data- current price, P/E ratio, revenue growth YoY, and 52 week range from Financial Modeling Prep's API
90 day price history chart- financial data from FMP's API rendered with Recharts
AI bull and bear case analysis- sends current financial data to Claude's API which returns a bull case, bear case, and final verdict
Thesis tracker- users write down a thesis, condition, and date for a specific ticker and saves thesis for further tracking
Authentication- user data are isolated through email/password auth through Supabase

#Tech stack
Framework-> Next.js, TypeScript
Styling-> Tailwind CSS
Charts-> Recharts
Financial data-> Financial Modeling Prep API
AI analysis-> Claude API Anthropic
Database & Auth -> Supabase
Deployment-> Vercel


#Running locally

bashgit clone https://github.com/Rachellwuu/Mosaic.git
cd Mosaic
npm install

Create a .env.local file in the root with your own keys:

FMP_API_KEY=your_fmp_key
ANTHRO_API_KEY=your_anthropic_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key

Then run the dev server:

bashnpm run dev

Open http://localhost:3000.

#Why I built this
Many investors make the mistake of creating vague opinions regarding their stock holdings instead of creating a concrete thesis which they can evaluate later. Mosaic guides investors to be accounted with a previous created strucuture instead of open opinions, to write a thesis with a condiion and a testifiable date so they can see if the call plays out. It is a tool for building accountablity and skill early on in the investment journey.

