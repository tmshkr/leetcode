public class Solution
{
  public int[] MinInterval(int[][] intervals, int[] queries)
  {
    var sortedQueries = queries.OrderBy(x => x).ToArray();
    Array.Sort(intervals, (a, b) => a[0] - b[0]);
    var pq = new PriorityQueue<int[], int>();
    var size = new Dictionary<int, int>();
    var i = 0;

    foreach (var q in sortedQueries)
    {
      while (i < intervals.Length && intervals[i][0] <= q)
      {
        var interval = intervals[i];
        var length = interval[1] - interval[0] + 1;
        pq.Enqueue(new int[2] { length, interval[1] }, length);
        i++;
      }

      while (pq.Count > 0 && pq.Peek()[1] < q)
      {
        pq.Dequeue();
      }
      size[q] = pq.Count > 0 ? pq.Peek()[0] : -1;
    }

    var result = new int[queries.Length];
    for (var j = 0; j < queries.Length; j++)
    {
      result[j] = size[queries[j]];
    }

    return result;
  }
}