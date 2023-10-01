public class Solution
{
  public int MinCostClimbingStairs(int[] cost)
  {
    var l = cost.Length;
    var minCost = new int[l + 1];
    for (var i = 2; i <= l; i++)
    {
      minCost[i] = Math.Min(
        minCost[i - 1] + cost[i - 1],
        minCost[i - 2] + cost[i - 2]);
    }
    return minCost[l];
  }
}