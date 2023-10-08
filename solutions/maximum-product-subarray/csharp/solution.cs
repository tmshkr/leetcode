public class Solution
{
  public int MaxProduct(int[] nums)
  {
    var res = nums.Max();
    int min = 1;
    int max = 1;

    foreach (var num in nums)
    {
      var tmp = max;
      max = new int[] { num, num * min, num * max }.Max();
      min = new int[] { num, num * min, num * tmp }.Min();
      res = Math.Max(res, max);
    }

    return res;
  }
}