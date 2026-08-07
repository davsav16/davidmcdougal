/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  // Sorts Tailwind classes into the framework's canonical order. Must stay
  // last in the plugin list — the plugin requires it.
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
