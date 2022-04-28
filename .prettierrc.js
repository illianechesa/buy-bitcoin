module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 140,
  bracketSpacing: true,
  importOrder: [
    "^@angular/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^common-ui",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    "classProperties",
    "typescript",
    "decorators-legacy",
  ],
};
