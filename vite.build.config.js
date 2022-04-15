import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
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
            external: ['i18next', 'solid-js', 'solid-js/web'],
            plugins: [
                typescript({
                    tsconfig: resolve('./tsconfig.json'),
                    include: ['./src/**/*.{ts,tsx}'],
                }),
            ],
        },
    },
    plugins: [solidPlugin()],
});
