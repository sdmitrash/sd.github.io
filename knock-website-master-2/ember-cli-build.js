/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // app.import('vendor/bootstrap.min.css');
  // app.import('vendor/style.css');
  // app.import('vendor/responsive.css');
  // app.import('vendor/fonts/Roboto-Black_0.ttf');
  // app.import('vendor/fonts/Roboto-BlackItalic_0.ttf');
  // app.import('vendor/fonts/Roboto-Bold_0.ttf');
  // app.import('vendor/fonts/Roboto-BoldItalic_0.ttf');
  // app.import('vendor/fonts/Roboto-Medium_0.ttf');
  // app.import('vendor/fonts/Roboto-MediumItalic_0.ttf');
  // app.import('vendor/fonts/Roboto-Regular_0.ttf');
  // app.import('vendor/fonts/Roboto-Italic_0.ttf');
  // app.import('vendor/fonts/Roboto-Light_0.ttf');
  // app.import('vendor/fonts/Roboto-LightItalic_0.ttf');
  // app.import('vendor/fonts/Roboto-Thin_0.ttf');
  // app.import('vendor/fonts/Roboto-ThinItalic_0.ttf');

  return app.toTree();
};
