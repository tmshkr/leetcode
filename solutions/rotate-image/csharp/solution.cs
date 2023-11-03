public class Solution
{
  public void Rotate(int[][] matrix)
  {
    int l = 0;
    int r = matrix.Length - 1;

    while (l < r)
    {
      for (int i = 0; i < r - l; i++)
      {
        int top = matrix[l][l + i];
        int right = matrix[l + i][r];
        int bottom = matrix[r][r - i];
        int left = matrix[r - i][l];

        matrix[l][l + i] = left;
        matrix[l + i][r] = top;
        matrix[r][r - i] = right;
        matrix[r - i][l] = bottom;
      }
      l++;
      r--;
    }
  }
}