public class Solution
{
  public void SetZeroes(int[][] matrix)
  {
    var rows = new HashSet<int>();
    var cols = new HashSet<int>();

    for (var i = 0; i < matrix.Length; i++)
    {
      for (var j = 0; j < matrix[i].Length; j++)
      {
        if (matrix[i][j] == 0)
        {
          rows.Add(i);
          cols.Add(j);
        }
      }
    }

    for (var i = 0; i < matrix.Length; i++)
    {
      for (var j = 0; j < matrix[i].Length; j++)
      {
        if (rows.Contains(i) || cols.Contains(j))
        {
          matrix[i][j] = 0;
        }
      }
    }
  }
}