public class Solution
{
  private int MIN = Int32.MinValue / 10;
  private int MIN_DIGIT = Int32.MinValue % 10;
  private int MAX = Int32.MaxValue / 10;
  private int MAX_DIGIT = Int32.MaxValue % 10;

  public int Reverse(int x)
  {
    int res = 0;
    while (x != 0)
    {
      int digit = x % 10;
      x = x / 10;

      if (res > MAX || (res == MAX && digit > MAX_DIGIT))
        return 0;

      if (res < MIN || (res == MIN && digit < MIN_DIGIT))
        return 0;

      res = res * 10 + digit;
    }

    return res;
  }
}
