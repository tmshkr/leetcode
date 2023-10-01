public class Solution
{
  public int MinCostClimbingStairs(int[] cost)
  {
    int n = cost.Length;
    int minCost = 0;
    int prevMin = 0;

    for (var i = 2; i <= n; i++)
    {
      int temp = minCost;
      minCost = Math.Min(
        minCost + cost[i - 1],
        prevMin + cost[i - 2]
        );
      prevMin = temp;
    }

    return minCost;
  }
}