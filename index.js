/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var islands = {}, index = 0, nums = [];
  var row = grid.length, col = grid[0] ? grid[0].length : 0;

  for (var i = 0; i < row; i++) {
    for (var j = col - 1; j >= 0; j--) {
      if (grid[i][j] === 1) {
        var key = `${i}-${j}`;
        var m = [[i, j - 1], [i, j + 1], [i + 1, j], [i - 1, j]];
        m = m.filter(a => (a[0] >= 0 && a[0] < row)&&(a[1] >= 0 && a[1] < col)).map(a => `${a[0]}-${a[1]}`);

        for (var k = 0; k < m.length; k++) {
          if (m[k] in islands) {
            islands[key] = islands[m[k]];
            break;
          }
        }

        if (!(key in islands)) {
          islands[key] = index++;
        }

        nums[islands[key]] = (nums[islands[key]] || 0) + 1;
      }
    }
  }

  nums.push(0);
  console.log(islands, nums);

  return Math.max(...nums);
};

maxAreaOfIsland([[1,0],[1,1]]);
