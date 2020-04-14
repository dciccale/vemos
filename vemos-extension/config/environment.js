"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "vemos-plugin",
    environment,
    rootURL: "/",
    locationType: "none",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      autoboot: true,
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  ENV["ember-cli-post-build-copy"] = {
    replace: true,
    development: [
      ["/assets/app.js", "extension/assets/app.js"],
      ["/assets/app.css", "extension/assets/app.css"],
      ["/assets/content-scripts-register-polyfill.js", "extension/content-scripts-register-polyfill.js"],
    ],
    production: [
      ["/assets/app.js", "extension/assets/app.js"],
      ["/assets/app.css", "extension/assets/app.css"],
      ["/assets/content-scripts-register-polyfill.js", "extension/content-scripts-register-polyfill.js"],
    ],
  };

  return ENV;
};
