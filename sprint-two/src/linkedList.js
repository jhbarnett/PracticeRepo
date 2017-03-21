var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }    
  };

  list.removeHead = function() {
    const result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target) {
    const search = (node, target) => {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return search(node.next, target);
      } else {
        return false;
      }
    }
    return search(this.head, target)
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // addToTail: O(1)
 // removeHead: O(1)
 // contains: O(n)