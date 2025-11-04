// small wrapper: VITE_API_URL defaults to http://localhost:4000
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function fetchMarket(){
  const res = await fetch(`${API}/api/market`);
  if (!res.ok) throw new Error('Failed to fetch market');
  return await res.json();
}
