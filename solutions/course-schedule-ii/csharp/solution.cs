public class Solution
{
  public int[] FindOrder(int numCourses, int[][] prerequisites)
  {
    List<List<int>> graph = new();
    HashSet<int> visited = new();
    HashSet<int> visiting = new();
    List<int> res = new();

    for (int i = 0; i < numCourses; i++)
    {
      graph.Add(new List<int>());
    }

    foreach (int[] pair in prerequisites)
    {
      int crs = pair[0];
      int pre = pair[1];
      graph[crs].Add(pre);
    }

    bool check(int crs)
    {
      if (visiting.Contains(crs)) return false;
      if (visited.Contains(crs)) return true;

      visiting.Add(crs);
      foreach (int pre in graph[crs])
        if (!check(pre)) return false;

      visiting.Remove(crs);
      visited.Add(crs);
      res.Add(crs);
      return true;
    }

    for (int crs = 0; crs < numCourses; crs++)
    {
      if (!check(crs))
        return Array.Empty<int>();
    }
    return res.ToArray();
  }
}
