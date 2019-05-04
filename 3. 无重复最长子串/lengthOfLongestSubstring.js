/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {}, i = 0, l = 0;
  for (var j = 0; j < s.length; j++) {
    if (s[j] in map) {
      i = Math.max(map[s[j]], i);
    }
    l = Math.max(l, j - i + 1);
    map[s[j]] = j + 1;
  }

  return l;
};

lengthOfLongestSubstring('abba');
