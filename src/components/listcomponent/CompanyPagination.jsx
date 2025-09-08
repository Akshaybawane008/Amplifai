// src/components/CompanyTable/Pagination.jsx
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CompanyPagination() {
  return (
    <div className="mb-4 flex justify-end items-center text-sm text-gray-600">
      <div className="flex items-center space-x-2">
        <span>1-10 of 24</span>
        <button className="px-2 py-1  rounded-md flex items-center">
          <ArrowLeft size={14} /> Previous
        </button>
        <span className="px-3 py-1  rounded-md  text-gray-600">
          1
        </span>
        <span className="px-3 py-1  rounded-md">2</span>
        <button className="px-2 py-1 rounded-md flex items-center">
          Next <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
