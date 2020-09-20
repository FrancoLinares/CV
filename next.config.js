const withCSS = require("@zeit/next-css");

module.exports = {
  exportTrailingslash: true,
  exportPathMap: function() {
    const paths = {
      "/": { page: "/" },
    };
  },
};
module.exports = withCSS({
  cssModules: true,
});
