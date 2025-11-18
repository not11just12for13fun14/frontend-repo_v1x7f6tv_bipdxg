import React from 'react'
import { Search, Bell, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between w-full px-4 sm:px-6 py-4 sticky top-0 z-20 bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
        <Search className="w-4 h-4 text-slate-300" />
        <input placeholder="Search campaigns, audiences..." className="bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-400 w-64" />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-2 rounded-lg hover:bg-white/10 text-slate-200">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-slate-900" />
        </button>
        <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          <span className="hidden sm:block text-sm text-slate-200">Alex Morgan</span>
          <User className="w-4 h-4 text-slate-300" />
        </button>
      </div>
    </header>
  )
}
