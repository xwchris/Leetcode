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
  function visitNode(node, arr) {
    // 为空直接返回
    if (node == null) {
      return;
    }

    // visit parent
    arr.push(node.val);
    // visit left
    visitNode(node.left, arr);
    // visit right
    visitNode(node.right, arr);
  }

  const result = [];
  visitNode(root, result);

  return result;
};
