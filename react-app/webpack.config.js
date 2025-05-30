const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org1",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      "@myapp/common-lib-webpack": "@paok/common-lib-webpack",
      styleguide: "styleguide",
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
