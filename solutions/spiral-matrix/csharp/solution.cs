public class Solution
{
  public IList<int> SpiralOrder(int[][] matrix)
  {
    IList<int> result = new List<int>();
    if (matrix == null || matrix.Length == 0)
    {
      return result;
    }
    int top = 0;
    int bottom = matrix.Length - 1;
    int left = 0;
    int right = matrix[0].Length - 1;

    while (left <= right && top <= bottom)
    {
      // left to right
      for (int i = left; i <= right; i++)
      {
        result.Add(matrix[top][i]);
      }
      top++;

      // top to bottom
      for (int i = top; i <= bottom; i++)
      {
        result.Add(matrix[i][right]);
      }
      right--;

      if (top <= bottom)
      {
        // right to left
        for (int i = right; i >= left; i--)
        {
          result.Add(matrix[bottom][i]);
        }
        bottom--;
      }

      if (left <= right)
        // bottom to top
        for (int i = bottom; i >= top; i--)
        {
          result.Add(matrix[i][left]);
        }
      left++;

    }
    return result;
  }
}

