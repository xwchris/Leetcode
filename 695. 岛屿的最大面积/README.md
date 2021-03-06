# 岛屿的最大面积

[原题链接](https://leetcode-cn.com/problems/max-area-of-island/)

## 题目
给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

***示例 1:***

```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```

对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

***示例 2:***
```
[[0,0,0,0,0,0,0,0]]
```
对于上面这个给定的矩阵, 返回 0。

***注意:*** 给定的矩阵grid 的长度和宽度都不超过 50。

## 思路与解法

这是一个求无向图最大联通图的问题，可以使用dfs标记遍历过的节点来求出最大值。

代码实现： [maxAreaOfIsland.js](https://github.com/xwchris/Leetcode/tree/master/695.%20%E5%B2%9B%E5%B1%BF%E7%9A%84%E6%9C%80%E5%A4%A7%E9%9D%A2%E7%A7%AF/maxAreaOfIsland.js)
