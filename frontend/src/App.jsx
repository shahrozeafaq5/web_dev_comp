import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import PriceChart from "./components/PriceChart";
import { fetchMarket } from "./api/marketApi";
import Login from "./pages/Login";
import AdminDashboard from "./components/AdminDashboard";
import FarmerDashboard from "./components/FarmerDashboard";
import CommunityForum from "./pages/CommunityForum";
import "./styles.css";

export default function App() {
  const [view, setView] = useState("landing"); // landing | login | market | admin | farmer | forum
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // Fetch market data only when view = market
  useEffect(() => {
    if (view !== "market") return;
    let mounted = true;
    setLoading(true);
    setErr(null);

    fetchMarket()
      .then((data) => {
        if (!mounted) return;
        setItems(data || []);
      })
      .catch((e) => {
        console.error("Failed to fetch market", e);
        if (!mounted) return;
        setErr("Could not load market data.");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [view]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      {/* Landing Page */}
      {view === "landing" && <LandingPage onLogin={() => setView("login")} />}

      {/* Login Page */}
      {view === "login" && (
        <Login
          onBack={() => setView("landing")}
          onAdminLogin={() => setView("admin")}
          onUserLogin={() => setView("farmer")}
        />
      )}

      {/* Market Page */}
      {view === "market" && (
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Market — Smart Agri
            </h1>

            <div className="space-x-3">
              <button
                onClick={() => setView("landing")}
                className="border border-gray-300 bg-white text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Home
              </button>
              <button
                onClick={() => setView("market")}
                className="bg-green-700 text-white font-semibold px-3 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Refresh
              </button>
            </div>
          </div>

          {loading && <p className="text-gray-500">Loading market data…</p>}
          {err && <p className="text-red-600">{err}</p>}
          {!loading && !err && <MarketList items={items} />}
        </div>
      )}

      {/* Admin Dashboard */}
      {view === "admin" && (
        <AdminDashboard onBack={() => setView("landing")} />
      )}

      {/* Farmer Dashboard */}
      {view === "farmer" && (
        <FarmerDashboard
          onForumOpen={() => setView("forum")}
          onMarketOpen={() => setView("market")}
          onBackHome={() => setView("landing")}
        />
      )}

      {/* Community Forum */}
      {view === "forum" && (
        <CommunityForum onBack={() => setView("farmer")} />
      )}
    </div>
  );
}

/* Market Components */
function MarketList({ items = [] }) {
  return (
    <div className="grid gap-5">
      {items.map((it) => (
        <MarketCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function MarketCard({ item }) {
  const trend = Array.isArray(item.trend)
    ? item.trend
    : new Array(7).fill(item.price ?? 0);

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-5">
      <div className="md:w-1/3">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.name} — ₹{item.price}
        </h2>
        <p className="text-sm text-gray-500">7-day trend</p>
      </div>

      <div className="flex-1 w-full">
        <PriceChart series={trend} />
      </div>

      <div className="text-right">
        <small className="text-gray-500 block">id: {item.id}</small>
        <button
          onClick={() => alert(`Open details for ${item.name}`)}
          className="mt-2 border border-gray-300 bg-white px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Details
        </button>
      </div>
    </section>
  );
}
