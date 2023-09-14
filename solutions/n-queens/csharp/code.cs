using System;
using System.Text;

public class Solution
{
  public IList<IList<string>> SolveNQueens(int n)
  {
    var result = new List<IList<string>>();
    var col = new HashSet<(int i, int j)>();
    var positiveDiag = new HashSet<(int i, int j)>();
    var negativeDiag = new HashSet<(int i, int j)>();

    var board = new List<StringBuilder>();
    for (int i = 0; i < n; i++)
    {
      board.Add(new StringBuilder(n));
      board[i].Append('.', n);

    }

    void backtrack(int row)
    {
      if (row == n)
      {
        result.Add(board.Select(s => s.ToString()).ToList());
        return;
      }
      if (row == board.Count) return;

      for (int c = 0; c < board.Count; c++)
      {
        var column = (0, c);
        int m = Math.Min(row, c);
        var diag1 = (row - m, c - m);
        m = Math.Min(row, board.Count - 1 - c);
        var diag2 = (row - m, c + m);

        if (
          col.Contains(column) ||
          positiveDiag.Contains(diag1) ||
          negativeDiag.Contains(diag2)
           ) continue;

        col.Add(column);
        positiveDiag.Add(diag1);
        negativeDiag.Add(diag2);


        board[row][c] = 'Q';
        backtrack(row + 1);

        board[row][c] = '.';
        col.Remove(column);
        positiveDiag.Remove(diag1);
        negativeDiag.Remove(diag2);
      }
    }

    backtrack(0);
    return result;
  }
}
