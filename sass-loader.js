var sass = require('node-sass');
var path = require('path');

module.exports = function(source, map) {
  var renderOpts = {
    data: source,
    sourceMap: this.resourcePath,
    omitSourceMapUrl: true,
    sourceMapContents: true
  };

  var result = sass.renderSync(renderOpts);
  this.async()(null, result.css.toString(), result.map.toString());
}
