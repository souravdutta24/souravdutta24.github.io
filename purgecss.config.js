module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // medium-zoom (assets/js/zoom.js) is loaded from a CDN and adds its
  // classes (medium-zoom-image, --opened, --hidden, medium-zoom-overlay,
  // medium-zoom--opened) to the DOM at runtime, so they never appear in
  // the static HTML/JS PurgeCSS scans and get stripped without this.
  safelist: [/^medium-zoom/],
};
