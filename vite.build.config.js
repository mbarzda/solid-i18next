import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => {
        switch (format) {
          case 'cjs':
            return 'index.js';
          case 'es':
            return 'index.mjs';
        }
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['i18next', 'solid-js', 'solid-js/web', 'html-parse-string'],
    },
  },
  plugins: [solidPlugin()],
});
