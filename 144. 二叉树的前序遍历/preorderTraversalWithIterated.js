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
var preorderTraversal = function(root) {
  var node = root, stack = [], result = [];

  while (node !== null || stack.length > 0) {
    if (node !== null) {
      // visit node
      result.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }

    // update node
    node = stack.pop();
  }

  return result;
};
