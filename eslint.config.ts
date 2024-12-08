import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const config = [
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    plugins: {
      perfectionist,
    },
    rules: {
      // perfectionist
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      // unicorn
      "unicorn/no-null": "off",
      "unicorn/no-useless-undefined": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            e: {
              event: false,
            },
            env: {
              environment: false,
            },
            props: {
              properties: false,
            },
            ref: {
              reference: false,
            },
          },
        },
      ],
    },
  },
];

export default config;
