/**
 * @prettier
 */

const configBuilder = require("./_config-builder")

const result = configBuilder(
  {
    minimize: true,
    mangle: true,
    sourcemaps: false,
    includeDependencies: true,
  },
  {
    entry: {
      "swagger-ui-react": ["./src/react-component.jsx"],
    },
    output: {
      globalObject: "this",
      library: {
        name: "SwaggerUIReact",
        type: "umd",
        export: "default",
      },
    },
    externals: {
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React",
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "ReactDOM",
      },
      "prop-types": {
        commonjs: "prop-types",
        commonjs2: "prop-types",
        amd: "prop-types",
        root: "PropTypes",
      },
    },
  }
)

module.exports = result
