import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginA11y from "eslint-plugin-jsx-a11y";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginA11y.configs,
  ...eslintPluginPrettier.configs,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
