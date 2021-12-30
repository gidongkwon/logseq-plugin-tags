import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconifgPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconifgPaths()],
  base: '',
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
});
