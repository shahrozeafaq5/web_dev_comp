// frontend/src/components/AdminDashboard.jsx
import React from "react";
import InventoryTable from "./InventoryTable";

export default function AdminDashboard({ onBack }) {
  return (
    <div className="min-h-screen bg-[#f9f4ed] text-[#5b3a1e]">
      <nav className="flex justify-between items-center px-10 py-5 bg-[#f8efe4]">
        <h2 className="font-bold text-lg text-[#8b5e3b]">AGRITRACKER</h2>
        <button
          onClick={onBack}
          className="bg-[#8b5e3b] text-white px-5 py-2 rounded-full hover:bg-[#724b2f]"
        >
          Back to Home
        </button>
      </nav>

      <div className="flex flex-wrap gap-10 px-10 py-8">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="nature"
          className="w-80 h-[420px] object-cover rounded-xl shadow"
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button className="bg-[#738b3f] text-white rounded-lg px-4 py-2 hover:bg-[#5f7434]">
              ✓ View Stats
            </button>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-xs px-3 py-2 border border-[#cbb59d] rounded-md"
            />
          </div>

          <InventoryTable />
        </div>
      </div>
    </div>
  );
}
