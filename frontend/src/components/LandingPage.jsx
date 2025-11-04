import React from "react";
import "./LandingPage.css";

export default function LandingPage({ onLogin }) {
  return (
    <div className="lp-root">
      <header className="lp-header">
        <div className="lp-brand">AGRITRACKER</div>
        <nav className="lp-nav" aria-label="Main navigation">
          <a href="#features">features</a>
          <button className="lp-link-btn" onClick={onLogin ?? (() => {})}>
            login
          </button>
        </nav>
      </header>

      <main className="lp-main" role="main">
        <section className="lp-hero" aria-labelledby="lp-hero-title">
          <h1 id="lp-hero-title" className="lp-hero-title">
            Smart Agriculture <br />
            Market Tracker
          </h1>

          <p className="lp-hero-sub">
            Your comprehensive platform for agricultural market tracking, weather
            insights, and smart farming decisions.
          </p>

          <button
            className="lp-cta"
            onClick={onLogin ?? (() => {})}
            aria-label="Login"
          >
            LOGIN
          </button>
        </section>

        <section id="features" className="lp-features" aria-labelledby="feat-title">
          <div className="lp-features-kicker">FEATURES</div>
          <h2 id="feat-title" className="lp-features-title">
            What We Offer
          </h2>

          <div className="lp-cards">
            <article className="lp-card" aria-labelledby="c1">
              <h3 id="c1" className="lp-card-title">REAL-TIME MARKET RATES</h3>
              <p className="lp-card-desc">
                Access up-to-date pricing information across different regions.
              </p>
            </article>

            <article className="lp-card" aria-labelledby="c2">
              <h3 id="c2" className="lp-card-title">WEATHER INSIGHTS</h3>
              <p className="lp-card-desc">
                Get local weather forecasts tailored for agricultural planning.
              </p>
            </article>

            <article className="lp-card" aria-labelledby="c3">
              <h3 id="c3" className="lp-card-title">SMART ADVICE</h3>
              <p className="lp-card-desc">
                Receive AI-powered recommendations for optimal farming decisions.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="lp-footer" aria-hidden>
        {/* subtle footer spacing — optional */}
      </footer>
    </div>
  );
}
