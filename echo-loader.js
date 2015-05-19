module.exports = function(source, map) {
  console.log(source);
  console.log(map);
  this.async()(null, source, map);
};
