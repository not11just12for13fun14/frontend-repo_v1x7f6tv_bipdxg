import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">Revenue-ready marketing dashboards</h1>
        <p className="mt-2 text-slate-300 max-w-xl">Glassmorphic, minimalist analytics built for modern growth teams. Connect data sources, track ROI, and move faster.</p>
        <div className="mt-4 flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Start free trial</button>
          <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium backdrop-blur hover:bg-white/20 transition border border-white/20">Book a demo</button>
        </div>
      </div>
    </section>
  )
}
