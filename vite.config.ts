import { defineConfig } from 'vite';
import { join } from 'path';
import { promises as fs } from 'fs';
import ghPages from 'gh-pages';

export default defineConfig({
  // other config options...
  base: '/movie-search-app/',
  build: {
    outDir: 'dist',
  },
});

if (process.env.NODE_ENV === 'production') {
  (async () => {
    try {
      const files = await fs.readdir(join(__dirname, 'dist'));
      if (files.length === 0) {
        throw new Error('No files found in the output directory.');
      }
      ghPages.publish(
        join(__dirname, 'dist'),
        {
          dotfiles: true,
          message: 'Deploy to GitHub Pages',
          branch: 'gh-pages',
        },
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Deployment to GitHub Pages completed successfully.');
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  })();
}
