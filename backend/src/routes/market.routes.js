// backend/src/routes/market.routes.js
const express = require('express');
const router = express.Router();

// In-memory store (minimal)
let nextId = 3;
const items = [
  { id: 1, name: 'Tomato', price: 40, trend: simulateTrend(40) },
  { id: 2, name: 'Potato', price: 25, trend: simulateTrend(25) }
];

function simulateTrend(base){
  const arr = [];
  let v = Number(base) || 10;
  for(let i=0;i<7;i++){
    v = Math.round((v + (Math.random()*6 - 3)) * 100) / 100;
    if (v < 1) v = 1;
    arr.push(v);
  }
  return arr;
}

// GET /api/market
router.get('/', (req, res) => {
  res.json(items);
});

// GET /api/market/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const it = items.find(i => i.id === id);
  if (!it) return res.status(404).json({ error: 'not found' });
  res.json(it);
});

// POST /api/market  { name, price }
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) return res.status(400).json({ error: 'name+price required' });
  const newItem = { id: nextId++, name, price: Number(price), trend: simulateTrend(Number(price)) };
  items.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;
