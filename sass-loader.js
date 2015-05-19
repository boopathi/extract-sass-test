var sass = require('node-sass');
var path = require('path');

module.exports = function(source, map) {
  var renderOpts = {
    data: source,
    sourceMap: true, //path.join(this.options.output.path, 'sass.map'),
    sourceMapContents: true
  }
  var result = sass.renderSync(renderOpts);
  this.async()(null, result.css, result.map);
}
