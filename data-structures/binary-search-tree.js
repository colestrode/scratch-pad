var vals = process.env.vals || [5, 10, 9, 2, 4, 8, 6, 7, 1, 3];
var root = null;

vals.forEach(addValue); // builds tree
printTree();


function addValue(value) {
  var node = {
    value: value,
    parent: null,
    left: null,
    right: null
  };

  if (!root) {
    root = node;
    return;
  }

  return addNode(root, node);
}


function addNode(parent, node) {

  if (node.value < parent.value) {
    if (parent.left !== null) {
      return addNode(parent.left, node);
    }
    console.log('adding left child of', node.value, 'to', parent.value);
    parent.left = node;
  } else {
    if (parent.right !== null) {
      return addNode(parent.right, node);
    }
    console.log('adding right child of', node.value, 'to', parent.value);
    parent.right = node;
  }

  node.parent = parent;
  return node;
}

function printTree() {
  if (!root) return console.log('tree is empty');
  console.log(print(root));
}

function print(node) {
  if (!node) return '';

  return print(node.left) + ' ' + node.value + ' ' + print(node.right);
}


vals.forEach(function(val) {

});