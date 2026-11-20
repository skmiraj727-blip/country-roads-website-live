import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function hostingerZipDownloadPlugin(): Plugin {
  return {
    name: 'hostinger-zip-download',
    configureServer(server) {
      server.middlewares.use('/country-roads-hostinger-nodejs.zip', (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          return next();
        }
        const zipPath = path.resolve(__dirname, 'country-roads-hostinger-nodejs.zip');
        if (!fs.existsSync(zipPath)) {
          res.statusCode = 404;
          res.end('Zip archive not found.');
          return;
        }
        const stat = fs.statSync(zipPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Length', stat.size);
        res.setHeader(
          'Content-Disposition',
          'attachment; filename="country-roads-hostinger-nodejs.zip"'
        );
        res.setHeader('Cache-Control', 'no-store');
        if (req.method === 'HEAD') {
          res.end();
          return;
        }
        fs.createReadStream(zipPath).pipe(res);
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), hostingerZipDownloadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
