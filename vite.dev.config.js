import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
    css: {
        modules: { localsConvention: 'camelCaseOnly' },
    },
    plugins: [solidPlugin()],
    resolve: { alias: { '@mbarzda/solid-i18next': resolve('./src/index.ts'), $: resolve('./examples') } },
    root: './examples',
    build: { outDir: resolve('./docs') },
});
