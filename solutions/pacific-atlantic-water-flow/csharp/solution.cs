public class Solution
{

  public IList<IList<int>> PacificAtlantic(int[][] heights)
  {
    List<IList<int>> res = new();
    int ROWS = heights.Length, COLS = heights[0].Length;
    bool[,] pac = new bool[ROWS, COLS];
    bool[,] atl = new bool[ROWS, COLS];

    void dfs(int row, int col, bool[,] visits, int prev)
    {
      if (
        row < 0 ||
        row >= ROWS ||
        col < 0 ||
        col >= COLS ||
        visits[row, col] ||
        heights[row][col] < prev
        )
        return;

      visits[row, col] = true;
      dfs(row, col + 1, visits, heights[row][col]);
      dfs(row, col - 1, visits, heights[row][col]);
      dfs(row + 1, col, visits, heights[row][col]);
      dfs(row - 1, col, visits, heights[row][col]);
    }


    for (int r = 0; r < ROWS; r++)
    {
      dfs(r, 0, pac, heights[r][0]);
      dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
    }

    for (int c = 0; c < COLS; c++)
    {
      dfs(0, c, pac, heights[0][c]);
      dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
    }

    for (int r = 0; r < ROWS; r++)
    {
      for (int c = 0; c < COLS; c++)
      {
        if (atl[r, c] && pac[r, c])
        {
          res.Add(new List<int> { r, c });
        }
      }
    }

    return res;
  }
}
