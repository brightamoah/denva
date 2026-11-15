import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  vue: true,
  typescript: {
    tsconfigPath: "tsconfig.json",
    overridesTypeAware: {
      "ts/no-floating-promises": "error",
      "ts/strict-boolean-expressions": "off",
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "ts/no-unsafe-call": "off",
      "ts/no-unsafe-member-access": "off",
      "ts/no-unsafe-return": "off",
    },
  },

  formatters: true,

  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },

  ignores: [
    ".pnpm-store/**",
    "**/dist/**",
    "**/coverage/**",
    ".github/**",
    ".power/**",
    "src/generated/**",
    "auto-imports.d.ts",
    "components.d.ts",
    "typed-router.d.ts",
  ],
}, {
  rules: {
    "antfu/if-newline": "off",

    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],

    "ts/no-redeclare": "off",

    "vue/require-typed-ref": "error",

    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],

    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "below",
      },
    ],

    "vue/padding-line-between-tags": [
      "error",
      [
        {
          blankLine: "always",
          prev: "*",
          next: "*",
        },
      ],
    ],

    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      },
    ],

    "vue/custom-event-name-casing": "off",

    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],

    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],

    "vue/component-api-style": [
      "error",
      ["script-setup"],
    ],

    "vue/define-emits-declaration": [
      "error",
      "type-based",
    ],

    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],

    "vue/new-line-between-multi-line-property": [
      "error",
      {
        minLineOfMultilineProperty: 2,
      },
    ],

    "ts/consistent-type-definitions": "off",

    "no-console": "warn",

    "antfu/no-top-level-await": "off",

    "node/prefer-global/process": "off",

    "node/no-process-env": "error",

    "antfu/top-level-functions": "off",

    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
        ignore: [
          "README.md",
          "pnpm-workspace.yaml",
          "App.vue",
        ],
      },
    ],

    "style/nonblock-statement-body-position": [
      "error",
      "beside",
    ],

    "pnpm/json-enforce-catalog": "off",
  },
});
