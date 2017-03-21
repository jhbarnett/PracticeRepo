var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) { return true }
  else {
    return this.children.filter(child => 
      child.contains(target)
    ).length > 0;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild: O(1)
// contains: O(n^2)