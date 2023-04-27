module.exports = {
  parser: "@babel/eslint-parser",

  rules: {
    "no-unused-vars": "warn",
    // "react/no-unused-prop-types": [0],
    "react/prop-types": [1],
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
