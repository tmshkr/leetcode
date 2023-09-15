class Solution
{
  public int NumIslands(char[][] grid)
  {
    int count = 0;
    for (int i = 0; i < grid.Length; i++)
    {
      for (int j = 0; j < grid[i].Length; j++)
      {
        if (grid[i][j] == '1')
        {
          count++;
          dfs(grid, i, j);
        }
      }
    }
    return count;
  }

  private void dfs(char[][] grid, int i, int j)
  {
    if (i < 0 || j < 0 || i >= grid.Length || j >= grid[i].Length || grid[i][j] == '0')
    {
      return;
    }
    grid[i][j] = '0';
    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  }
}