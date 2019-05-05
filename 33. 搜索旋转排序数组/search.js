/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  function bsearch(left, right) {
    if (left > right) {
      return - 1;
    }

    var mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        return bsearch(mid + 1, right);
      } else {
        return bsearch(left, mid - 1);
      }
    } else {
      if (nums[left] <= target && target < nums[mid]) {
        return bsearch(left, mid - 1);
      } else {
        return bsearch(mid + 1, right);
      }
    }
  }

  return bsearch(0, nums.length - 1);
};
