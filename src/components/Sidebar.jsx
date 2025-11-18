import React from 'react'
import { BarChart3, Megaphone, Users, Zap, Settings, LayoutGrid, TrendingUp } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active=false }) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${active ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </button>
)

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-2 w-64 shrink-0 h-screen sticky top-0 p-4 bg-slate-900/40 border-r border-white/10 backdrop-blur-xl">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
        <div>
          <p className="text-white font-semibold leading-tight">FluxMark</p>
          <p className="text-xs text-slate-300/70">Marketing Cloud</p>
        </div>
      </div>

      <div className="mt-2 grid gap-1">
        <NavItem icon={LayoutGrid} label="Overview" active />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={Megaphone} label="Campaigns" />
        <NavItem icon={Users} label="Audience" />
        <NavItem icon={TrendingUp} label="Attribution" />
      </div>

      <div className="mt-auto grid gap-1">
        <div className="px-2 text-xs uppercase tracking-wider text-slate-400/70">General</div>
        <NavItem icon={Zap} label="Automations" />
        <NavItem icon={Settings} label="Settings" />
      </div>
    </aside>
  )
}
