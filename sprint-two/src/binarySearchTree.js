class BinarySearchTree {  
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }

  insert(value) { 
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
        this.parent = this;
      } 
    } else if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
        this.parent = this;
      } 
    }
  }

  contains(target) {
    if (target > this.value && this.right) {
      if (this.right.value === target) { return true }
      else { return this.right.contains(target) } 
    }
    else if (target < this.value && this.left) {
      if (this.left.value === target) { return true }
      else { return this.right.contains(target) }   
    }
    else {
      return target === this.value;
    }
  }

  depthFirstLog(callback) {
    callback(this.value);

    if (this.right) { this.right.depthFirstLog(callback) }
    if (this.left) { this.left.depthFirstLog(callback) }
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
