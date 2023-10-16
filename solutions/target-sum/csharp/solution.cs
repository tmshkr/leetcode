public class Solution
{
  public int FindTargetSumWays(int[] nums, int target)
  {
    var cache = new Dictionary<(int, int), int>();

    int recurse(int i, int sum)
    {
      if (i == nums.Length)
        return sum == target ? 1 : 0;


      if (cache.ContainsKey((i, sum)))
      {
        return cache[(i, sum)];
      }

      cache[(i, sum)] = recurse(i + 1, sum + nums[i]) + recurse(i + 1, sum - nums[i]);
      return cache[(i, sum)];
    }

    return recurse(0, 0);
  }
}