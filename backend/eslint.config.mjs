// eslint.config.js
export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: "script", // or "module" if you use import/export
        globals: {
          require: "readonly",
          module: "readonly",
          exports: "readonly",
          process: "readonly",
          __dirname: "readonly",
          console: "readonly",
        },
      },
      rules: {
        // Add any ESLint rules you want here, or leave empty for defaults
      },
    },
  ];
  