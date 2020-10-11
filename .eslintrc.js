const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "airbnb",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react/prop-types": OFF,
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": OFF,
    "import/prefer-default-export": OFF,
    // "better-styled-components/sort-declarations-alphabetically": ERROR,
    "prettier/prettier": ERROR,
    'react/jsx-filename-extension': OFF,
    "import/no-unresolved": OFF
  },
}
