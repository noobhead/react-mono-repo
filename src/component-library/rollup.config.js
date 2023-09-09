import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import postcssPrefixSelector from "postcss-prefix-selector";
import postcssRemToPx from "postcss-rem-to-pixel";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: {
      dir: "lib",
      format: "esm"
  },
  plugins: [
    peerDepsExternal(),
    url(),
    resolve(),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx'],
      exclude: '**/node_modules/**'
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    json({
      compact: true
    }),
    image(),
    postcss({
      plugins: [
        postcssPrefixSelector({
          prefix: '.component-library',
        }),
        postcssRemToPx({
          rootValue: 10,
          propList: ['*'],
          replace: true,
          mediaQuery: true,
        }),
      ]
    }),
  ]
};
