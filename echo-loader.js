var fs = require('fs');

module.exports = function(source, map) {
  console.log(fs.readFileSync('./styles.scss').toString());
  console.log(source);
  console.log(map);
  this.async()(null, source, map);
};
