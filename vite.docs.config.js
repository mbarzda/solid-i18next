import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const require = createRequire(import.meta.url);

const ignoreImport = () => {
  const virtualModuleId = 'html-parse-string';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'ignore-import',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id !== resolvedVirtualModuleId) return;

      try {
        require(virtualModuleId);
      } catch {
        return `export const parse = undefined`;
      }
    },
  };
};

export default defineConfig({
  base: '/solid-i18next/',
  build: { outDir: resolve('./dist') },
  css: {
    modules: { localsConvention: 'camelCaseOnly' },
  },
  plugins: [solidPlugin(), ignoreImport()],
  resolve: { alias: { '@mbarzda/solid-i18next': resolve('./src/index.ts'), $: resolve('./docs/src') } },
  root: './docs',
});
