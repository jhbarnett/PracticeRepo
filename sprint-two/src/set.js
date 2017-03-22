var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  this._storage = this._storage.filter(value => value !== item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add: O(n)
// contains: O(n)
// remove: O(n)