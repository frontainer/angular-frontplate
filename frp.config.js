'use strict';
module.exports = function (production) {
  global.FRP_DEST = 'public';
  return {
    clean: {
      src: null
    },
    style: {
      noGuide: true
    },
    script: production ? require('./config/prod/webpack.config') : require('./config/dev/webpack.config')
  }
};
