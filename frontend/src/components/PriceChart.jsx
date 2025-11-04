// Minimal inline SVG "chart" (no external deps)
import React from 'react';

export default function PriceChart({ series = [] }){
  // series: array of numbers (7 days)
  const width = 300;
  const height = 80;
  const max = Math.max(...series, 1);
  const min = Math.min(...series, 0);
  const pad = 8;

  if (series.length === 0) {
    return <div style={{height: height}}>No data</div>;
  }

  const points = series.map((v,i) => {
    const x = pad + (i * (width - pad*2) / (series.length - 1));
    const y = pad + ((max - v) * (height - pad*2) / Math.max(max - min, 1));
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-label="7-day price trend">
      <polyline fill="none" stroke="#333" strokeWidth="2" points={points} />
      {/* small markers */}
      {series.map((v,i) => {
        const x = pad + (i * (width - pad*2) / (series.length - 1));
        const y = pad + ((max - v) * (height - pad*2) / Math.max(max - min, 1));
        return <circle key={i} cx={x} cy={y} r="2.2" />;
      })}
    </svg>
  );
}
