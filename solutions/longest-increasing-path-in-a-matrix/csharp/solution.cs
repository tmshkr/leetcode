public class Solution
{
  public int LongestIncreasingPath(int[][] matrix)
  {

    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var max = 0;

    var dp = new int[rows, cols];

    int dfs(int i, int j, int prev)
    {
      if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[i][j] <= prev)
        return 0;
      if (dp[i, j] > 0)
        return dp[i, j];

      int cur = matrix[i][j];
      int top = dfs(i - 1, j, cur);
      int right = dfs(i, j + 1, cur);
      int bottom = dfs(i + 1, j, cur);
      int left = dfs(i, j - 1, cur);

      dp[i, j] = 1 + Math.Max(Math.Max(top, right), Math.Max(bottom, left));
      max = Math.Max(max, dp[i, j]);
      return dp[i, j];
    }

    for (var i = 0; i < rows; i++)
    {
      for (var j = 0; j < cols; j++)
      {
        dfs(i, j, -1);
      }
    }
    return max;
  }
}