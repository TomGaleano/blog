// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Blog de Tomás y Lau";
export const SITE_DESCRIPTION =
  "¡Bienvenidos a nuestro blog! Aquí hablamos de Química y de Matemáticas.";
export const TWITTER_HANDLE = "@Tomas_271828182";
export const MY_NAME = "Tomás y Lau";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
