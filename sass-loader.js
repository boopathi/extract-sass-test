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
  // var rmap = JSON.parse(result.map.toString());
  // rmap.sources = [ '../styles.scss' ];
  // this.async()(null, result.css.toString(), JSON.stringify(rmap));
  this.async()(null, result.css, result.map);
}
