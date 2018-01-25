/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here

    ENV.redis = {
      allowOverwrite: true,
      host: process.env['REDIS_HOST'],
      port: process.env['REDIS_PORT'],
      password: process.env['REDIS_PASSWORD'],
      keyPrefix: 'knock-website:index'
    };

    ENV.s3 = {
      accessKeyId: process.env['AWS_KEY'],
      secretAccessKey: process.env['AWS_SECRET'],
      bucket: 'knock-website',
      region: 'us-east-1'
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
