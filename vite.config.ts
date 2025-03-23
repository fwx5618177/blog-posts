import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze';
  const isDev = mode === 'development';

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            VITE_APP_TITLE: isDev ? '[DEV]Moxi - Blog' : 'Moxi - Blog',
          },
        },
      }),
      isAnalyze &&
        visualizer({
          open: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
