public class Solution
{
  public int MinCostClimbingStairs(int[] cost)
  {
    var n = cost.Length;
    var minCost = new int[n + 1];
    for (var i = 2; i <= n; i++)
    {
      minCost[i] = Math.Min(
        minCost[i - 1] + cost[i - 1],
        minCost[i - 2] + cost[i - 2]);
    }
    return minCost[n];
  }
}