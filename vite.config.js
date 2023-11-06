import { defineConfig } from 'vite';

/** @type import('vite').UserConfig */
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: { entry: './src/index.ts' },
    rollupOptions: {
      external: ['i18next', 'solid-js', 'solid-js/web', 'html-parse-string'],
    },
  },
});
