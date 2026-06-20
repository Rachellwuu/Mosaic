import {NextRequest, NextResponse} from "next/server"

export async function POST(request:NextRequest){
    const body = await request.json()
    const {symbol, price, pe, revenue, yearHigh, yearLow, changePercentage } = body
    const prompt =`You are a financial analyst. Based on the following data and market news right now, generate 3 bull case reasons and 3 bear case reasons and final advice of buy, watch, hold, or sell.
        Data:
        Price: $${price}
        P/E ratio: ${pe}
        Revenue growth YoY: ${revenue}%
        52-week high: $${yearHigh}
        52-week low: $${yearLow}
        Change today: ${changePercentage}%

        Respond ONLY in this exact JSON format with no other text:
        {
        "bull": ["reason 1", "reason 2", "reason 3"],
        "bear": ["reason 1", "reason 2", "reason 3"],
        "verdict": "BUY/HOLD or WATCH/SELL",
        "reasoning": "explanation here"
        }`
        const cresponse = await fetch("https://api.anthropic.com/v1/messages", {method:"POST",headers:{"Content-Type":"application/json","x-api-key":process.env.ANTHRO_API_KEY,"anthropic-version":"2023-06-01"},
            body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000, messages:[{role:"user", content:prompt}]}) })
        const data = await cresponse.json()
        console.log("Claude response:", data)
        const analysisText = data.content[0].text
        const cleanedText = analysisText.replace(/```json\n?/g, "").replace(/```/g, "")
        const analysis = JSON.parse(cleanedText)
    
        return NextResponse.json(analysis)
}