public class Solution
{
  public int EraseOverlapIntervals(int[][] intervals)
  {
    if (intervals.Length == 0)
    {
      return 0;
    }

    Array.Sort(intervals, (a, b) => a[1] - b[1]);

    int count = 0;
    int prev = intervals[0][1];

    for (int i = 1; i < intervals.Length; i++)
    {
      if (intervals[i][0] < prev)
      {
        count++;
      }
      else
      {
        prev = intervals[i][1];

      }
    }

    return count;
  }
}
