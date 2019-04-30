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
var postorderTraversal = function(root) {
  function visitNode(node, arr) {
    if (node == null) {
      return;
    }

    visitNode(node.left, arr);
    visitNode(node.right, arr);
    arr.push(node.val);
  }

  var result = [];
  visitNode(root, result);
  return result;
};
