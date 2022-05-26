const typescript = require('rollup-plugin-typescript2')
const path = require('path')

export default {
  input: 'src/index.ts',
  external: ['vue'],
  output: {
    file: 'dist/index.js',
    format: 'esm',
    globals: {
      vue: 'Vue'
    }
  },
  plugins: [
    typescript({
      clean: true,
      check: false, // FIXED: https://github.com/ezolenko/rollup-plugin-typescript2/issues/234
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
    }),
  ]
}
