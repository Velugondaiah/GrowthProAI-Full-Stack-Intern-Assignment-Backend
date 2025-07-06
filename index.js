const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Simulated headlines for regeneration
const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover Mumbai's Best Cakes at Cake & Co!",
  "Cake & Co: The Heart of Mumbai's Dessert Scene",
  "Mumbai's Favorite Cakes Await at Cake & Co",
  "Experience Sweet Perfection at Cake & Co, Mumbai"
];

// Helper to pick a random headline
function getRandomHeadline(name, location) {
  const random = headlines[Math.floor(Math.random() * headlines.length)];
  // Optionally personalize
  return random.replace(/Cake & Co/g, name).replace(/Mumbai/g, location);
}

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
res.json({
  rating: (Math.random() * 2 + 3).toFixed(1), // random rating between 3.0 and 5.0
  reviews: Math.floor(Math.random() * 900 + 100), // random reviews between 100 and 999
  headline: getRandomHeadline(name, location)
});g

});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
  res.json({
    headline: getRandomHeadline(name, location)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

