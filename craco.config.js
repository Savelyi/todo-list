const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@actions": resolvePath("./src/actions"),
      "@constants": resolvePath("./src/constants"),
      "@helpers": resolvePath("./src/helpers"),
      "@reducers": resolvePath("./src/reducers"),
      "@forms": resolvePath("./src/forms"),
    },
  },
};
