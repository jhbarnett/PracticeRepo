

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * .75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
    }
  }

  if (this._size < this._limit * .25) {
    this.resize(Math.floor(this._limit/2));
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(bucket => {
    if (!bucket) { return; }
    for (let i = 0; i < bucket.length; i++) {
      this.insert.apply(this, bucket[i])
    } 
  })
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


