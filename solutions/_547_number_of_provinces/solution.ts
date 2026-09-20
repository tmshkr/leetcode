/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected: number[][]) {
  let numCities = isConnected.length;
  const visited = new Set<number>();
  let numProvinces = 0;

  for (let i = 0; i < numCities; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, i);
      numProvinces++;
    }
  }

  return numProvinces;
}

function dfs(isConnected: number[][], visited: Set<number>, i: number) {
  visited.add(i);
  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      dfs(isConnected, visited, j);
    }
  }
}

export const solution = findCircleNum;

/*
https://leetcode.com/problems/number-of-provinces/
*/
