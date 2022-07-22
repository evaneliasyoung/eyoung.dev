import {defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default ({mode}) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd(), '')} as {
    HOST: string;
    HMR_PORT: string;
    PORT: string;
  };

  return defineConfig({
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
      host: env.HOST,
      port: parseInt(env.PORT) ?? undefined,
      strictPort: true,
      hmr: {
        clientPort: parseInt(env.HMR_PORT) ?? undefined,
      },
    },
  });
};
