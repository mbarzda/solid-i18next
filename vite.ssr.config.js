import { mergeConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteConfig from './vite.config';

/** @type import('vite').UserConfig */
const config = {
  build: {
    lib: {
      fileName: (format) => {
        switch (format) {
          case 'cjs':
            return 'ssr.js';
          case 'es':
            return 'ssr.mjs';
        }
      },
      formats: ['cjs', 'es'],
    },
  },
  plugins: [solidPlugin({ solid: { generate: 'ssr' } })],
};
export default mergeConfig(viteConfig, config);
