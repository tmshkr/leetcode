public class Solution
{
  public int ClimbStairs(int n)
  {
    if (n <= 3) return n;

    int a = 2;
    int b = 3;

    for (var i = 4; i <= n; i++)
    {
      int temp = b;
      b = a + b;
      a = temp;
    }

    return b;
  }
}