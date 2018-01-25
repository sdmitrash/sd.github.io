/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      // setup for milborne project
      prepend: 'https://d1exeiwqkiokey.cloudfront.net/'
    },

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true
    }
  });


  return app.toTree();
};
