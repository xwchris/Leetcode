# 三数之和

[原题链接](https://leetcode-cn.com/problems/3sum/)

## 题目

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

***注意：*** 答案中不可以包含重复的三元组。

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 思路与解法

这道题可以看做二数之和的升级版，由于该数组开始是无序的，为了方便，我们先将数组转为有序数组。

数组有序之后，我们将问题转化为`num[l] + nums[r] === -nums[i]`的问题，`i`为遍历的当前位置，`l`和`r`分别为`i`之后的位置。这样就将三数之和的问题，转换为两数之和的问题，同时为了避免重复，需要做一些额外的判断。

代码实现：[threeSum.js](https://github.com/xwchris/Leetcode/tree/master/15.%20%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C/threeSum.js)
