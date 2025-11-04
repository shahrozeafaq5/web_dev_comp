import React, { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "Wheat",
    category: "Crop",
    quantity: 150,
    price: 200,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=200",
  },
  {
    id: 2,
    name: "Corn",
    category: "Crop",
    quantity: 300,
    price: 150,
    image: "https://images.unsplash.com/photo-1615473031643-6e74e2b1f7c2?w=200",
  },
  {
    id: 3,
    name: "Fertilizer",
    category: "Supply",
    quantity: 50,
    price: 500,
    image: "https://images.unsplash.com/photo-1592928303400-4f3b30a2d2b3?w=200",
  },
  {
    id: 4,
    name: "Weather Sensor",
    category: "Equipment",
    quantity: 10,
    price: 1000,
    image: "https://images.unsplash.com/photo-1601288496920-4447fa9df381?w=200",
  },
];

export default function InventoryTable() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="bg-[#f6ebdf] p-5 rounded-xl shadow-sm border border-[#e0d2c3]">
      <h3 className="font-semibold text-lg text-[#5b3a1e] mb-1">
        Items Inventory
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Manage and update your stock details.
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-[#decbb7] text-[#5b3a1e]">
            <th className="py-3 px-4">Item</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Quantity</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#f0e3d4] hover:bg-[#f9f1e7] transition"
            >
              {/* Item cell with image */}
              <td className="flex items-center gap-3 py-3 px-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md border border-[#d8c7b5]"
                />
                <div>
                  <p className="font-semibold text-[#5b3a1e]">{item.name}</p>
                  <p className="text-sm text-gray-600">ID: {item.id}</p>
                </div>
              </td>

              <td className="py-3 px-4">{item.category}</td>
              <td className="py-3 px-4">{item.quantity}</td>
              <td className="py-3 px-4">${item.price.toLocaleString()}</td>

              {/* Actions dropdown */}
              <td className="py-3 px-4 text-center relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.id ? null : item.id)
                  }
                  className="bg-[#8b5e3b] text-white px-3 py-1 rounded-md text-sm hover:bg-[#724b2f] transition"
                >
                  ⋮
                </button>

                {openDropdown === item.id && (
                  <div className="absolute right-8 mt-2 w-36 bg-white border border-[#d6c4b2] rounded-lg shadow-md text-sm z-10">
                    <button className="block w-full text-left px-4 py-2 hover:bg-[#f6ebdf]">
                      ✏ Edit
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-[#f6ebdf]">
                      🗑 Delete
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-[#f6ebdf]">
                      📄 View Details
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-[#5b3a1e]">
        <span>Page 1 of 1</span>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md hover:bg-[#f1e7da]">
            Previous
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-[#f1e7da]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
