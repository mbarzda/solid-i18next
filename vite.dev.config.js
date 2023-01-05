import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
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
  css: {
    modules: { localsConvention: 'camelCaseOnly' },
  },
  plugins: [solidPlugin(), ignoreImport()],
  resolve: { alias: { '@mbarzda/solid-i18next': resolve('./src/index.ts'), $: resolve('./examples') } },
  root: './examples',
  build: { outDir: resolve('./docs') },
  base: '/solid-i18next/',
});
