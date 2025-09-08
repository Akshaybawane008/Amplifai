import { useState } from "react"

export default function FiscalYearDropdown() {
  const [selected, setSelected] = useState("FY (2024-2025)")

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="border rounded-xl px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
    >
      <option>FY (2024-2025)</option>
      <option>FY (2023-2024)</option>
      <option>FY (2022-2023)</option>
      <option>FY (2021-2022)</option>
    </select>
  )
}
