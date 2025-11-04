import React, { useState, useEffect } from "react";

export default function FarmerDashboard({
  onForumOpen,
  onMarketOpen,
  onBackHome,
}) {
  const [showWeather, setShowWeather] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);
  const [advice, setAdvice] = useState("");

  const data = [
    { item: "Wheat", category: "Grains", quantity: 150, price: 24.3 },
    { item: "Corn", category: "Grains", quantity: 200, price: 18.75 },
    { item: "Apples", category: "Fruits", quantity: 95, price: 30.5 },
    { item: "Potatoes", category: "Vegetables", quantity: 400, price: 15.2 },
    { item: "Barley", category: "Grains", quantity: 180, price: 22.1 },
    { item: "Carrots", category: "Vegetables", quantity: 250, price: 28.45 },
  ];

  // Simple logic-based smart advice system
  useEffect(() => {
    if (!showAdvice) return;

    const now = new Date();
    const hour = now.getHours();
    const random = Math.random();

    const advices = [
      "Avoid watering crops today — soil moisture seems sufficient.",
      "Wheat prices might rise this week — consider holding your stock.",
      "Sunny day ahead — perfect time for drying harvested grains.",
      "Potatoes in storage? Check for humidity levels to prevent rot.",
      "If rain is expected, delay fertilizer use to avoid runoff.",
      "Great day for sowing corn — moderate temperature and humidity!",
      "Tomato prices are trending up — plan your sale soon.",
      "Water your crops early morning to prevent evaporation loss.",
      "Check irrigation pipes; consistent pressure improves yield.",
      "Low wind today — ideal for spraying pesticides safely."
    ];

    let selectedAdvice = advices[Math.floor(random * advices.length)];

    if (hour >= 5 && hour <= 9)
      selectedAdvice = "Morning is ideal for watering crops — less evaporation.";
    else if (hour >= 18 && hour <= 20)
      selectedAdvice = "Evening dew will help natural hydration — no watering needed.";
    else if (hour >= 12 && hour <= 15)
      selectedAdvice = "Avoid watering now — high evaporation risk under sunlight.";

    setAdvice(selectedAdvice);
  }, [showAdvice]);

  return (
    <div className="flex min-h-screen bg-[#FAF6F0] text-[#5B432C] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F3E9DA] p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wide mb-8 text-[#7A4E29]">
            AGRITRACKER
          </h1>
          <nav className="flex flex-col gap-6 text-lg">
            <button
              onClick={onMarketOpen}
              className="flex items-center gap-3 bg-[#D4D9A3] text-[#5B432C] py-2 px-4 rounded-md font-medium hover:bg-[#C4CB8F] transition"
            >
              🛒 Market
            </button>

            <button
              onClick={onForumOpen}
              className="flex items-center gap-3 hover:text-[#7A4E29] transition"
            >
              💬 Community Forum
            </button>

            <button
              onClick={() => setShowWeather(!showWeather)}
              className={`flex items-center gap-3 py-2 px-4 rounded-md font-medium transition ${
                showWeather
                  ? "bg-[#C4CB8F] text-[#5B432C]"
                  : "hover:text-[#7A4E29]"
              }`}
            >
              ☀ Live Weather
            </button>

            <button
              onClick={() => setShowAdvice(!showAdvice)}
              className={`flex items-center gap-3 py-2 px-4 rounded-md font-medium transition ${
                showAdvice
                  ? "bg-[#C4CB8F] text-[#5B432C]"
                  : "hover:text-[#7A4E29]"
              }`}
            >
              🌾 Smart Farmer Advice
            </button>
          </nav>
        </div>

        <button
          onClick={onBackHome}
          className="bg-[#8B5E3C] text-white py-2 rounded-md hover:bg-[#724b2f] transition font-medium"
        >
          Back to Home
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        {/* Default Farmer Dashboard */}
        {!showWeather && !showAdvice && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold">Farmer Dashboard</h2>
            </div>

            <input
              type="text"
              placeholder="Search"
              className="w-1/3 mb-6 p-3 rounded-md border border-[#D3C6B3] bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#C2A87B]"
            />

            <div className="overflow-hidden rounded-xl bg-[#F7F2EB] shadow-md">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#E9DFC9]">
                  <tr className="text-[#5B432C]">
                    <th className="py-3 px-6">Item</th>
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Quantity</th>
                    <th className="py-3 px-6">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#E5D9C6] hover:bg-[#F2E9DE] transition"
                    >
                      <td className="py-3 px-6">{row.item}</td>
                      <td className="py-3 px-6">{row.category}</td>
                      <td className="py-3 px-6">{row.quantity}</td>
                      <td className="py-3 px-6">{row.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Weather Section */}
        {showWeather && !showAdvice && (
          <div className="bg-[#F7F2EB] p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B432C]">
              🌦 Live Weather Map
            </h2>
            <p className="text-gray-700 mb-4">
              Real-time weather radar for your region.
            </p>
            <div className="w-full h-[500px] rounded-xl overflow-hidden border border-[#D3C6B3] shadow-inner">
              <iframe
                src="https://embed.ventusky.com/?p=33.6;73.0;6&l=temperature&v=3"
                title="Live Weather Map"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}

        {/* Smart Advice Section */}
        {showAdvice && !showWeather && (
          <div className="bg-[#F7F2EB] p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B432C]">
              🌾 Smart Farmer Advice
            </h2>
            <p className="text-gray-700 mb-4">
              Logic-based daily tips for better crop management.
            </p>
            <div className="bg-[#FAF6F0] p-5 rounded-lg border border-[#D3C6B3] text-lg text-[#5B432C] shadow-inner">
              💡 <span className="font-medium">{advice}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
