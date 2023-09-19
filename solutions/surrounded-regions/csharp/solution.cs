public class Solution
{
  public void Solve(char[][] board)
  {
    var ROWS = board.Length;
    var COLS = board[0].Length;

    void dfs(int r, int c)
    {
      if (r >= ROWS || r < 0 || c >= COLS || c < 0 || board[r][c] != 'O')
        return;

      board[r][c] = 'T';
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }

    for (int r = 0; r < ROWS; r++)
    {
      dfs(r, 0);
      dfs(r, COLS - 1);
    }

    for (int c = 0; c < COLS; c++)
    {
      dfs(0, c);
      dfs(ROWS - 1, c);
    }

    for (int r = 0; r < ROWS; r++)
    {
      for (int c = 0; c < COLS; c++)
      {
        board[r][c] = board[r][c] == 'T' ? 'O' : 'X';
      }
    }
  }
}
