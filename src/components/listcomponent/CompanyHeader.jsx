import { Search, Filter, Upload, Plus } from "lucide-react";

export default function CompanyHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">

      <div className="flex items-center space-x-2 w-full md:w-auto mb-2 md:mb-0">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2 text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search Companies"
            className="w-full border rounded-md pl-8 pr-2 py-1 text-sm"
          />
        </div>
        <button className="p-2 border rounded-md text-sm text-blue-600 hover:bg-blue-50">
          <Filter size={12} />
        </button>
      </div>


      <div className="flex space-x-2">
        <button className="px-3 py-1 flex items-center justify-center gap-2 border rounded-md text-sm text-blue-600 hover:bg-blue-50">
          <Upload size={14} />
          Export
        </button>

        <button className="px-3 py-1 flex items-center justify-center gap-2 border rounded-md text-sm text-blue-600 hover:bg-blue-50">
          <Plus size={14} />Add Company
        </button>
      </div>
    </div>
  );
}
