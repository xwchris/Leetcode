# 无重复最长子串

[原题链接](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

## 题目

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

***示例 1:***

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

***示例 2:***

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

***示例 3:***

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 思路与解法

为了计算无重复字符最长子串的长度，我们需要在遍历字符串的过程中，找到以当前字符结尾的最大无重复子串长度，并与存储的最大值进行比较更新。

为了表示该子串，我们用`i`和`j`分别表示子串的起始和结束位置，子串的长度就是`j - i + `。每当遇到重复的字符就更新起始位置`i`。如此循环遍历，直到最后找出最大值。

代码实现：[lengthOfLongestSubstring.js](https://github.com/xwchris/Leetcode/tree/master/3.%20%E6%97%A0%E9%87%8D%E5%A4%8D%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2/lengthOfLongestSubstring.js)
