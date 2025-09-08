
import React from 'react'

const defaultCompanies = [
  { name: 'NextGen Software Ltd.', revenue: '€68.3M', profit: '€8.1M', ebitda: '+26.5%', cash: '€6.8M', cycle: 52 },
  { name: 'Global Tech Solutions', revenue: '€62.6M', profit: '€6.3M', ebitda: '+19.3%', cash: '€5.4M', cycle: 76 },
  { name: 'Innovtech Solutions', revenue: '€64.5M', profit: '€5.3M', ebitda: '+18.5%', cash: '€4.5M', cycle: 45 },
  { name: 'Creative Design Group', revenue: '€36.5M', profit: '€4.1M', ebitda: '+0.9%', cash: '€2.3M', cycle: 88 },
  { name: 'Digital Dynamics Inc.', revenue: '€30.2M', profit: '€3.9M', ebitda: '-3.9%', cash: '€1.9M', cycle: 25 },
]

export default function Table({ companies = defaultCompanies }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
      <h4 className="text-sm font-medium mb-3">Entity-wise Performance</h4>

  
      <div className="min-w-[700px]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-xs uppercase">
              <th className="p-3">Company</th>
              <th className="p-3">Revenue</th>
              <th className="p-3">Net Profit</th>
              <th className="p-3">EBITDA</th>
              <th className="p-3">Cash Flow</th>
              <th className="p-3">WC Cycle (days)</th>
            </tr>
          </thead>

          <tbody>
            {companies.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">No records found</td>
              </tr>
            ) : (
              companies.map((c, idx) => {
                const key = c.name ?? idx
                const initials = (c.name || '')
                  .split(' ')
                  .filter(Boolean)
                  .map(part => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()

                const isNegative = typeof c.ebitda === 'string' && c.ebitda.trim().startsWith('-')

                return (
                  <tr key={key} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                          {initials || '—'}
                        </div>
                        <div className="truncate max-w-xs">{c.name}</div>
                      </div>
                    </td>

                    <td className="p-3">{c.revenue ?? '—'}</td>
                    <td className="p-3">{c.profit ?? '—'}</td>

                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          isNegative ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'
                        }`}
                      >
                        {c.ebitda ?? '—'}
                      </span>
                    </td>

                    <td className="p-3">{c.cash ?? '—'}</td>
                    <td className="p-3">{typeof c.cycle === 'number' ? c.cycle : (c.cycle ?? '—')}</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
