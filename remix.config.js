const { defineRoutes } = require("@remix-run/dev/dist/config/routes");
const { flatRoutes } = require("remix-flat-routes");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      basePath: "/",
      ignoredRouteFiles: [],
    });
  },
};
