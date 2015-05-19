module.exports = function(source, map) {
  process.env.DEBUG && console.log(source);
  process.env.DEBUG && console.log(map);
  this.async()(null, source, map);
};
