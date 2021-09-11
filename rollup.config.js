import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: './dist/index.mjs',
            format: 'esm',
        },
        {
            file: './dist/index.js',
            format: 'cjs',
        },
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        babel({
            babelHelpers: 'runtime',
            extensions: ['.ts', '.tsx'],
            plugins: [['@babel/plugin-transform-runtime']],
        }),
    ],
    external: ['i18next', 'solid-js', 'solid-js/web'],
});
