public class Solution
{
  public int CanCompleteCircuit(int[] gas, int[] cost)
  {
    int start = 0;
    int tank = 0;
    int totalGas = 0;

    for (int i = 0; i < gas.Length; i++)
    {
      int diff = gas[i] - cost[i];
      tank += diff;
      totalGas += diff;

      if (tank < 0)
      {
        start = i + 1;
        tank = 0;
      }
    }

    return totalGas >= 0 ? start : -1;
  }
}
