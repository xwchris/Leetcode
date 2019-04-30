# 二叉树前序遍历
[原题链接](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

## 题目

给定一个二叉树，返回它的 前序 遍历。

**示例**:

```
  输入: [1,null,2,3]
    1
      \
      2
      /
    3

  输出: [1,2,3]
```

**进阶**: 递归算法很简单，你可以通过迭代算法完成吗？

## 思路与解法

二叉树先序遍历是二叉树遍历的一种方式，它遍历的顺序，分别是先访问父节点，然后访问左孩子节点，访问右孩子节点。

### 递归方式
使用递归方式很简单，按照遍历顺序来依次访问，使用一个数组来记录被访问节点的值。注意递归结束条件，当访问的节点为空时，结束递归。

代码实现：[preorderTraversalWithRecursive.js](https://github.com/xwchris/Leetcode/blob/master/144.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86/preorderTraversalWithRecursive.js)

### 循环方式
如果不是用递归的方式，只用循环如何遍历？我们为了实现`父节点 => 左孩子节点 => 右孩子节点`的访问顺序，需要借助栈的结构。我们可以使用一个变量`node`来记录我们需要访问的下一个节点，因为要先访问左孩子节点，所以要先将右孩子入栈，再将左孩子入栈。从根节点开始，每访问一个节点，都从栈顶拿出下一个需要访问的节点，直到下一个节点为null并且栈为空。

代码实现：[preorderTraversalWithIterated.js](https://github.com/xwchris/Leetcode/blob/master/144.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86/preorderTraversalWithIterated.js)
