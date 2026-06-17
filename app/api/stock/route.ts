import {NextRequest, NextResponse} from "next/server"
export async function GET(request:NextRequest){
    const ticker = request.nextUrl.searchParams.get("ticker")
    const[quoteRes, profileRes, incomeRes, historyRes] = await Promise.all([
    fetch(`https://financialmodelingprep.com/stable/quote?symbol=${ticker}&apikey=${process.env.FMP_API_KEY}`),
    fetch(`https://financialmodelingprep.com/stable/ratios?symbol=${ticker}&limit=1&apikey=${process.env.FMP_API_KEY}`),
    fetch(`https://financialmodelingprep.com/stable/income-statement-growth?symbol=${ticker}&limit=1&apikey=${process.env.FMP_API_KEY}`),
    fetch(`https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=${ticker}&apikey=${process.env.FMP_API_KEY}`)
    ])

    const qdata = await quoteRes.json()
    const pdata = await profileRes.json()
    const idata = await incomeRes.json()
    const historicalData = await historyRes.json()
    const priceHistory = historicalData.slice(0,90).reverse()
    const data = {
        ...qdata[0],pe:pdata[0]?.priceToEarningsRatio,revenue:idata[0]?.growthRevenue,priceHistory:priceHistory
    }
    return NextResponse.json(data)
}