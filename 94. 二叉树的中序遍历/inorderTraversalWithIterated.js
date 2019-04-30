/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var node = root, stack = [], result = [];

  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      var top = stack.pop();
      result.push(top.val);
      node = top.right;
    }
  }

  return result;
};
