public class Solution
{
  public int[][] Insert(int[][] intervals, int[] newInterval)
  {
    List<int[]> result = new List<int[]>();
    int i = 0;

    // add all intervals that end before the new interval starts
    while (i < intervals.Length && intervals[i][1] < newInterval[0])
    {
      result.Add(intervals[i]);
      i++;
    }

    // merge all overlapping intervals
    while (i < intervals.Length && intervals[i][0] <= newInterval[1])
    {
      newInterval[0] = Math.Min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.Max(newInterval[1], intervals[i][1]);
      i++;
    }
    result.Add(newInterval);

    // add all intervals that start after the new interval ends
    while (i < intervals.Length)
    {
      result.Add(intervals[i]);
      i++;
    }

    return result.ToArray();
  }
}
