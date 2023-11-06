import { mergeConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteConfig from './vite.config';

/** @type import('vite').UserConfig */
const config = {
  build: {
    lib: {
      fileName: () => 'browser.mjs',
      formats: ['es'],
    },
  },
  plugins: [solidPlugin()],
};
export default mergeConfig(viteConfig, config);
