import { BellDot } from "lucide-react";
import FiscalYearDropdown from "../components/dashboard/FiscalYearDropdown";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 shadow-sm">
      <div className="flex gap-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <FiscalYearDropdown />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Quben Infra</span>
        <BellDot />
        <button className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          AI Chat
        </button>
      </div>
    </div>
  );
}
