public class Solution
{
  public int HammingWeight(uint n)
  {
    var res = 0;
    while (n > 0)
    {
      res += (int)n & 1;
      n >>= 1;
    }

    return res;
  }
}