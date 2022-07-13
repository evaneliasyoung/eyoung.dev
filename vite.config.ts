import {defineConfig} from 'vite';

const PUBLIC: boolean = false;
const PROXY_HMR: boolean = false;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/app-main.element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit-element/,
    },
  },
  server: {
    host: PUBLIC ? '0.0.0.0' : 'localhost',
    port: 7270,
    strictPort: true,
    hmr: {
      clientPort: PROXY_HMR ? 443 : 7270,
    },
  },
});
