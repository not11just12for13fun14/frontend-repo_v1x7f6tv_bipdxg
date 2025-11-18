import React from 'react'
import { ArrowUpRight, ArrowDownRight, Wallet, MousePointerClick, HandCoins, BarChart3 } from 'lucide-react'

const Card = ({ title, value, delta, up=true, icon: Icon, subtitle }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400/80">{title}</p>
        <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      </div>
      <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 border border-white/10">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="mt-2 flex items-center gap-2">
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs ${up ? 'text-emerald-300 bg-emerald-400/10' : 'text-rose-300 bg-rose-400/10'}`}>
        {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />} {delta}
      </span>
      <span className="text-xs text-slate-400">{subtitle}</span>
    </div>
  </div>
)

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card title="MRR" value="$84,230" delta="12.4%" up icon={Wallet} subtitle="vs last month" />
      <Card title="CPC" value="$1.87" delta="4.1%" up={false} icon={MousePointerClick} subtitle="lower is better" />
      <Card title="CAC Payback" value="3.2 mo" delta="8.9%" up icon={HandCoins} subtitle="improving" />
      <Card title="Attribution" value="72%" delta="2.3%" up icon={BarChart3} subtitle="multi-touch" />
    </div>
  )
}
