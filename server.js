import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

app.disable('x-powered-by');

// Health check endpoint for Hostinger / reverse-proxy monitoring
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'country-roads-resort' });
});

// Serve built Vite production assets with long-lived caching for hashed bundles
app.use(
  express.static(distDir, {
    index: false,
    maxAge: '7d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  })
);

// SPA fallback to dist/index.html
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next();
  }
  if (!fs.existsSync(indexHtmlPath)) {
    return res
      .status(503)
      .send('Production build not found in ./dist. Run "npm run build" first.');
  }
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  return res.sendFile(indexHtmlPath);
});

app.listen(PORT, () => {
  console.log(`Country Roads server running on port ${PORT}`);
});
