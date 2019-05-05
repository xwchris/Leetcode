/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var row = grid.length, col = grid[0] ? grid[0].length : 0;
  var max = 0;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(dfs(i, j), max);
      }

    }
  }

  function dfs(i, j) {
    var count = 0;
    if (i >= 0 && j >= 0 && i < row && j < col && grid[i][j] === 1) {
      grid[i][j] = 0;
      count++;
      count += dfs(i - 1, j);
      count += dfs(i + 1, j);
      count += dfs(i, j - 1);
      count += dfs(i, j + 1);
    }

    return count;
  }

  return max;
};
