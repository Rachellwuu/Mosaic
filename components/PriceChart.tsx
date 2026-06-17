import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export interface PriceData{
    close:number
    date:string
}

type PriceChartProps = {
    data:PriceData[]
}

export default function PriceChart({data}: PriceChartProps){
    return(
        <div className = "mt-8 border bg-[#161920] rounded-2xl w-full p-4">
            <p className="text-zinc-500 font-mono text-sm mb-2">90-day price history</p>
            <ResponsiveContainer width = "100%" height = {200}>
                <LineChart data = {data}>
                    <XAxis hide dataKey = "date"/>
                    <YAxis domain={['auto','auto']}/>
                    <Line stroke="#4ade80" type = "monotone" dataKey = "close" dot = {false}/>
                </LineChart>

            </ResponsiveContainer>
        </div>

    )

}