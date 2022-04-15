import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
    root: './examples',
    plugins: [solidPlugin()],
    resolve: { alias: { '@mbarzda/solid-i18next': resolve('./src/index.ts') } },
});
