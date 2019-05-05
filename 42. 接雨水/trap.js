/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var n = height.length, left = new Array(n).fill(0), right = new Array(n).fill(0);
  // left[i]与right[i]分别表示i左面最大的值和i右面最大的值
  for (var i = 1; i < n; i++) {
    left[i] = Math.max(height[i - 1], left[i - 1]);
  }
  for (var i = n - 2; i >= 0; i--) {
    right[i] = Math.max(height[i + 1], right[i + 1])
  }
  var area = 0;
  for (var i = 0; i < n; i++) {
    var level = Math.min(left[i], right[i]);
    area +=  Math.max(0, level - height[i]);
  }

  return area;
};
