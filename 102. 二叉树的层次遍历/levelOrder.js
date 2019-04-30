/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var queue = [], result = [];

  if (root == null) {
    return result;
  }

  // 记录节点及其层级
  queue.push([root, 0]);

  while (queue.length > 0) {
    var [node, i] = queue.shift();
    result[i] = result[i] || [];
    // 子节点的层级为父节点层级加一
    if (node.left) {
      queue.push([node.left, i + 1]);
    }
    if (node.right) {
      queue.push([node.right, i + 1]);
    }
    // 访问节点，将节点值放入对应层级数组
    result[i].push(node.val);
  }

  return result;
};
