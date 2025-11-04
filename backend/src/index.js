// backend/src/index.js
const express = require('express');
const cors = require('cors');
const marketRoutes = require('./routes/market.routes'); // must export an Express router

const app = express();

app.use(cors());
app.use(express.json());

// mount router - ensure marketRoutes is a function/router, not an object
app.use('/api/market', marketRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
