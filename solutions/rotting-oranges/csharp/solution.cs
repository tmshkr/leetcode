public class Solution
{
  public int OrangesRotting(int[][] grid)
  {
    int ROWS = grid.Length, COLS = grid[0].Length, fresh = 0, minutes = 0;

    Queue<(int, int)> q = new Queue<(int, int)>();

    for (int r = 0; r < ROWS; r++)
    {
      for (int c = 0; c < COLS; c++)
      {
        if (grid[r][c] == 1) fresh++;
        if (grid[r][c] == 2) q.Enqueue((r, c));
      }
    }

    int[,] dir = new int[,] { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
    while (fresh > 0 && q.Any())
    {
      int count = q.Count;
      for (int i = 0; i < count; i++)
      {
        var curr = q.Dequeue();
        for (int j = 0; j < 4; j++)
        {
          int row = curr.Item1 + dir[j, 0];
          int col = curr.Item2 + dir[j, 1];

          if (row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] == 1)
          {
            grid[row][col] = 2;
            q.Enqueue((row, col));
            fresh--;
          }
        }
      }
      minutes++;
    }

    return fresh == 0 ? minutes : -1;
  }
}
