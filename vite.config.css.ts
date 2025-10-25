import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: './src/styles.ts',
      formats: ['es'],
      fileName: 'styles',
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: 'index.css',
      },
    },
  },
});
