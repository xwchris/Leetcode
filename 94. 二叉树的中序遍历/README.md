# 二叉树的中序遍历

[原题链接](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

## 题目

给定一个二叉树，返回它的中序 遍历。

**示例**:

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```
**进阶**: 递归算法很简单，你可以通过迭代算法完成吗？

## 思路与解法

二叉树中序遍历是二叉树遍历的一种方式，它遍历的顺序为`左 => 父 => 右`。

### 递归方式
使用递归方式很简单与[先序遍历](https://github.com/xwchris/Leetcode/tree/master/144.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86)解法类似，只需要更换父节点访问位置就可以。

代码实现：[inorderTraversalWithRecursive.js](https://github.com/xwchris/Leetcode/tree/master/94.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86/inorderTraversalWithRecursive.js)

### 循环方式
这里我们需要再次借助栈结构来帮助我们存储节点。我们用`node`来记录下一个需要记录的节点，如果该节点不为空，将该节点入栈（便于之后访问），则更新`node`为其左孩子，并如此重复，直到左孩子为`null`。当`node`为`null`，则栈顶元素为`node`的父节点，访问该节点（输出该值）。然后更新`node`为栈顶元素的右节点，继续遍历右子树。如此遍历，直到`node`为`null`并且栈为空代表遍历完毕。

代码实现：[inorderTraversalWithIterated.js](https://github.com/xwchris/Leetcode/tree/master/94.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86/inorderTraversalWithIterated.js)
