public class Solution
{
  public int ManhattanDistance(int[] p1, int[] p2)
  {
    return Math.Abs(p1[0] - p2[0]) + Math.Abs(p1[1] - p2[1]);
  }
  public int MinCostConnectPoints(int[][] points)
  {
    int n = points.Length;
    var edges = new List<(int distance, int point1, int point2)>();

    // Calculate Manhattan distance and build the list of edges
    for (int i = 0; i < n; i++)
    {
      for (int j = i + 1; j < n; j++)
      {
        int distance = ManhattanDistance(points[i], points[j]);
        edges.Add((distance, i, j));
      }
    }

    edges.Sort((a, b) => a.distance.CompareTo(b.distance)); // Sort edges by distance

    // Initialize Union-Find data structure
    int[] parent = new int[n];
    for (int i = 0; i < n; i++)
    {
      parent[i] = i;
    }
    int Find(int x)
    {
      if (parent[x] != x)
      {
        parent[x] = Find(parent[x]);
      }
      return parent[x];
    }


    int totalCost = 0;
    int numEdgesAdded = 0;

    foreach (var (distance, u, v) in edges)
    {
      int rootU = Find(u);
      int rootV = Find(v);

      if (rootU != rootV)
      {
        totalCost += distance;
        parent[rootU] = rootV;
        numEdgesAdded++;
      }

      if (numEdgesAdded == n - 1)
      {
        break; // We have added enough edges to form the minimum spanning tree
      }
    }

    return totalCost;
  }
}
