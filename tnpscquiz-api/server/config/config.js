var _ = require('lodash');

// deafult config object for our api
var config = {
    /* just placing the name of our possible NODE_ENV values for later*/
    dev: 'development',
    test: 'testing',
    prod: 'production',
    expireTime: 24 * 60 * 10,
    secrets: {
      jwt: process.env.JWT || 'tnpsctest'
  },
    port: process.env.PORT || 3000
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
// set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;

var envConfig;
try {
    envConfig = require('./' + config.env)
    envConfig = envConfig || {}

}
catch(e){
    envConfig = {}
}
module.exports = _.merge(config, envConfig);