# 二叉树的层次遍历

[原题链接](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

## 题目

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

**例如**:
给定二叉树: `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [9,20],
  [15,7]
]
```

## 思路和解法

二叉树的层次遍历，即一层层遍历，直到遍历完所有节点。为了辅助遍历，可以使用队列结构。

遍历过程先将根节点入队列，然后却出队列第一个节点，访问该节点并将其左右孩子入队列，如果循环直到队列为空。

该题目中因为要按照层次打印出结果，为了记录节点所处的层次，可以使用一个额外的变量记录，每次其孩子入队列，孩子所处的层级就是该节点层级加一。

代码实现：[levelOrder.js](https://github.com/xwchris/Leetcode/tree/master/102.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E6%AC%A1%E9%81%8D%E5%8E%86/levelOrder.js)

## 相关资料

- [层序遍历 - 介绍](https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/2/traverse-a-tree/8/)
