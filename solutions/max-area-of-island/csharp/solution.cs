public class Solution
{
  public int MaxAreaOfIsland(int[][] grid)
  {
    int r = grid.Length, c = grid[0].Length, area = 0;

    bool[,] visits = new bool[r, c];
    for (int i = 0; i < r; i++)
    {
      for (int j = 0; j < c; j++)
      {
        area = Math.Max(area, dfs(i, j));
      }
    }

    int dfs(int row, int col)
    {
      int m = grid.Length, n = grid[0].Length;
      if (
        row < 0 ||
        row >= m ||
        col < 0 ||
        col >= n ||
        visits[row, col] ||
        grid[row][col] == 0
        )
        return 0;

      visits[row, col] = true;
      return (1 +
        dfs(row, col + 1) +
        dfs(row, col - 1) +
        dfs(row + 1, col) +
        dfs(row - 1, col));
    }

    return area;
  }
}
