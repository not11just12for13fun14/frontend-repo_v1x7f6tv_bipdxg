import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero3D from './components/Hero3D'
import MetricCards from './components/MetricCards'
import Charts from './components/Charts'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60vw_60vw_at_10%_-10%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(50vw_50vw_at_110%_10%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <Topbar />

            <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
              <Hero3D />
              <MetricCards />
              <Charts />

              <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="xl:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-slate-300">Top Campaigns</p>
                    <div className="text-xs text-slate-400">This quarter</div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-slate-400">
                        <tr>
                          <th className="py-2">Name</th>
                          <th className="py-2">Channel</th>
                          <th className="py-2">Spend</th>
                          <th className="py-2">Revenue</th>
                          <th className="py-2">ROAS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {[
                          {name:'Q4 Launch', channel:'Paid Social', spend:42000, revenue:168000},
                          {name:'Content Engine', channel:'Organic', spend:6000, revenue:72000},
                          {name:'Brand SEM', channel:'Search', spend:18000, revenue:91000},
                          {name:'Partner Co-Marketing', channel:'Partnerships', spend:12000, revenue:68000},
                        ].map((r, i) => (
                          <tr key={i} className="text-slate-200">
                            <td className="py-2">{r.name}</td>
                            <td className="py-2 text-slate-300">{r.channel}</td>
                            <td className="py-2">${r.spend.toLocaleString()}</td>
                            <td className="py-2">${r.revenue.toLocaleString()}</td>
                            <td className="py-2 font-medium">{(r.revenue/r.spend).toFixed(2)}x</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                  <p className="text-sm text-slate-300 mb-3">Integrations</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Stripe','HubSpot','Google Ads','Meta Ads','Segment','Snowflake'].map((name) => (
                      <div key={name} className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-white/10" />
                        <p className="mt-2 text-sm text-slate-200">{name}</p>
                        <button className="mt-2 text-xs text-cyan-300 hover:text-cyan-200">Connect</button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
