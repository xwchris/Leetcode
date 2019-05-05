/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var snums = nums.sort((a, b) => a - b);
  var length = nums.length, result = [];

  for (var i = 0; i < length; i++) {
    if (i === 0 || snums[i] > snums[i - 1]) {
      var l = i + 1, r = length - 1;

      while (l < r) {
        var sum = snums[i] + snums[l] + snums[r];
        if (sum === 0) {
          result.push([snums[i], snums[l], snums[r]]);
          l += 1;
          r -= 1;
          while (l < r && snums[l] === snums[l - 1]) {
            l += 1;
          }
          while (l < r && snums[r] === snums[r + 1]) {
            r -= 1;
          }
        } else if (sum < 0) {
          l += 1;
        } else {
          r -= 1;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
