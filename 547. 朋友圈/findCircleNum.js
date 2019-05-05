/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  var count = 0, n = M.length, visited = [];

  for (var i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  function dfs(k) {
    for (var j = 0; j < n; j++) {
      if (!visited[j] && M[k][j] === 1) {
        visited[j] = true;
        dfs(j);
      }
    }
  }

  return count;
};
