import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  minify: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
  dts: true,
  tsconfig: 'tsconfig.build.json'
});
