module.exports = {
  env: {
    browser: true,
    es6: true,
    "googleappsscript/googleappsscript": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "googleappsscript", "import"],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    sourceType: "module",
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-namespace": "off",
    "import/first": 2,
    "no-cond-assign": ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        trailingComma: "es5",
      },
    ],
  },
};
