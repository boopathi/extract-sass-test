var postcss = require('postcss');
var path = require('path');
var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
  var cb = this.async();
  var file = loaderUtils.getRemainingRequest(this);

  postcss(this.options.postcss)
    .process(source, {
      from: file,
      to: file,
      map: {
        prev: map,
      }
    })
    .then(function(result) {
      cb(null, result.css, result.map);
    });
};
