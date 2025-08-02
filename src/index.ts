import express from 'express';
import { fetchRenderedHTML } from './scraper';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/html', async (req, res) => {
  const url = req.query.url as string;
//   if (!url) return res.status(400).json({ error: 'URL query parameter required' });

  try {
    const html = await fetchRenderedHTML("https://www.fantasypros.com/nfl/rankings/ppr-cheatsheets.php");
    res.set('Content-Type', 'text/html').send(html);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
