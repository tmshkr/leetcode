public class Solution
{
  public bool CanFinish(int numCourses, int[][] prerequisites)
  {
    List<List<int>> graph = new();
    HashSet<int> visited = new();
    HashSet<int> visiting = new();
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

    bool isCyclic(int crs)
    {
      if (visited.Contains(crs)) return false;
      if (visiting.Contains(crs)) return true;

      visiting.Add(crs);
      foreach (int pre in graph[crs])
        if (isCyclic(pre)) return true;

      visiting.Remove(crs);
      visited.Add(crs);
      return false;
    }

    for (int crs = 0; crs < numCourses; crs++)
    {
      if (isCyclic(crs))
        return false;
    }
    return true;
  }
}
