import React from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

const revenue = Array.from({length: 12}).map((_, i) => ({
  month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i],
  value: Math.round(60000 + Math.sin(i/2)*12000 + Math.random()*8000)
}))

const cvr = Array.from({length: 30}).map((_, i) => ({
  day: i+1,
  value: Math.round(2 + Math.sin(i/3)*0.8 + Math.random()*0.5)
}))

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg bg-slate-900/90 border border-white/10 text-white text-xs">
      <p className="font-medium">{label}</p>
      <p className="text-slate-300">{payload[0].value.toLocaleString()}</p>
    </div>
  )
}

export default function Charts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="xl:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-slate-300">Revenue</p>
          <div className="text-xs text-slate-400">Last 12 months</div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="value" stroke="#22d3ee" fillOpacity={1} fill="url(#rev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-slate-300">Conversion Rate</p>
          <div className="text-xs text-slate-400">Last 30 days</div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cvr}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
