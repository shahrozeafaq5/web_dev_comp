// frontend/src/App.jsx
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import PriceChart from "./components/PriceChart";
import { fetchMarket } from "./api/marketApi";
import "./styles.css"; // optional global styles (keep or remove)

// Top-level app: toggles between Landing and Market views.
// Replace or extend navigation with react-router if you prefer.
export default function App() {
  const [view, setView] = useState("landing"); // "landing" | "market"
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // Fetch market when entering market view
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

  function handleLogin() {
    // simple flow: treat login as navigation to the market page.
    // Hook up real auth here later.
    setView("market");
  }

  function handleBackToLanding() {
    setView("landing");
  }

  return (
    <div className="app-root">
      {view === "landing" && <LandingPage onLogin={handleLogin} />}

      {view === "market" && (
        <div style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h1 style={{ margin: 0 }}>Market — Smart Agri</h1>
            <div>
              <button
                onClick={handleBackToLanding}
                style={{
                  marginRight: 10,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Home
              </button>
              <button
                onClick={() => { setView("market"); }}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "none",
                  background: "#7aa02f",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Refresh
              </button>
            </div>
          </div>

          {loading && <p>Loading market data…</p>}
          {err && <p style={{ color: "crimson" }}>{err}</p>}

          {!loading && !err && (
            <MarketList items={items} />
          )}

          {!loading && !err && items.length === 0 && (
            <p>No items available. You can add items via the backend API.</p>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------------------
   Small presentational components
   (kept inside App.jsx intentionally for minimal file count)
   --------------------------- */

function MarketList({ items = [] }) {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      {items.map((it) => (
        <MarketCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function MarketCard({ item }) {
  // Ensure trend is an array of numbers; fallback to repeated value
  const trend = Array.isArray(item.trend) ? item.trend : new Array(7).fill(item.price ?? 0);

  return (
    <section
      style={{
        border: "1px solid #eee",
        borderRadius: 10,
        padding: 18,
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        display: "flex",
        gap: 18,
        alignItems: "center",
      }}
      aria-label={`${item.name} market card`}
    >
      <div style={{ flex: "0 0 340px" }}>
        <h2 style={{ margin: "0 0 6px" }}>{item.name} — ₹{item.price}</h2>
        <div style={{ color: "#666" }}>7-day trend</div>
      </div>

      <div style={{ flex: 1 }}>
        <PriceChart series={trend} />
      </div>

      <div style={{ flex: "0 0 120px", textAlign: "right" }}>
        <small style={{ color: "#666" }}>id: {item.id}</small>
        <div style={{ marginTop: 8 }}>
          <button
            onClick={() => alert(`Open details for ${item.name} (implement later)`)}
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Details
          </button>
        </div>
      </div>
    </section>
  );
}
