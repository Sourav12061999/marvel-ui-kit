import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
const packageJson = require("./package.json");
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourceMap:true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourceMap:true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: false,
        inlineSources: true,
      }),
      terser(),
      postcss({
        minimize: true,
        plugins: [],
      }),
    ],
  },
  {
    input: "dist/esm/index.types.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
