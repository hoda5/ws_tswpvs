import typescript from 'rollup-plugin-typescript2';

export default {
    entry: './src/index.tsx',
    plugins: [
        typescript(/*{ plugin options }*/)
    ],
    output: {
        file: 'bundle.js',
        format: 'es'
    }
}