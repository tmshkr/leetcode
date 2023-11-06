public class Solution
{
  public bool IsHappy(int n)
  {
    var set = new HashSet<int>();
    while (n != 1)
    {
      if (set.Contains(n))
      {
        return false;
      }
      set.Add(n);
      n = GetNext(n);
    }
    return true;
  }

  private int GetNext(int n)
  {
    var sum = 0;
    while (n > 0)
    {
      var digit = n % 10;
      n /= 10;
      sum += digit * digit;
    }
    return sum;
  }
}