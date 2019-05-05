/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  var count = 0;

  for (var i of data) {
    if (count === 0) {
      if (i >> 5 === 0b110) {
        count = 1;
      } else if (i >> 4 === 0b1110) {
        count = 2;
      } else if (i >> 3 === 0b11110) {
        count = 3;
      } else if (i >> 7 !== 0) {
        return false;
      }
    } else {
      if (i >> 6 !== 0b10) {
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
};
