public class Solution
{
  public int NetworkDelayTime(int[][] times, int N, int K)
  {
    var graph = new Dictionary<int, Dictionary<int, int>>();
    foreach (var edge in times)
    {
      if (!graph.ContainsKey(edge[0]))
      {
        graph[edge[0]] = new Dictionary<int, int>();
      }
      graph[edge[0]][edge[1]] = edge[2];
    }
    var dist = new Dictionary<int, int>();
    for (var i = 1; i <= N; i++)
    {
      dist[i] = int.MaxValue;
    }
    dist[K] = 0;
    var visited = new HashSet<int>();
    while (true)
    {
      var u = -1;
      var minDist = int.MaxValue;
      foreach (var pair in dist)
      {
        if (!visited.Contains(pair.Key) && pair.Value < minDist)
        {
          u = pair.Key;
          minDist = pair.Value;
        }
      }
      if (u == -1)
      {
        break;
      }
      visited.Add(u);
      if (graph.ContainsKey(u))
      {
        foreach (var pair in graph[u])
        {
          var v = pair.Key;
          var w = pair.Value;
          if (dist[u] + w < dist[v])
          {
            dist[v] = dist[u] + w;
          }
        }
      }
    }
    var result = 0;
    foreach (var pair in dist)
    {
      if (pair.Value == int.MaxValue)
      {
        return -1;
      }
      result = Math.Max(result, pair.Value);
    }
    return result;
  }
}