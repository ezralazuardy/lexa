/** @type {import('postcss-load-config').Config} */
import purgecss from "@fullhuman/postcss-purgecss";

const purgecssConfig = purgecss({
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const config = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === "production"
      ? { "@fullhuman/postcss-purgecss": purgecssConfig }
      : {}),
  },
};

export default config;
