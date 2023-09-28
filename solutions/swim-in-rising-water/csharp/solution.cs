public class Solution
{
  PriorityQueue<(int, int), int> pq;
  private HashSet<(int, int)> visited;
  public int SwimInWater(int[][] grid)
  {
    int N = grid.Length;
    var pq = new PriorityQueue<(int, int), int>();
    var visited = new HashSet<(int, int)>();
    pq.Enqueue((0, 0), grid[0][0]);

    while (pq.TryDequeue(out var nei, out var priority))
    {
      int r = nei.Item1;
      int c = nei.Item2;
      visited.Add((r, c));

      if (r == N - 1 && c == N - 1) return priority;

      foreach (var dir in directions)
      {
        int nr = r + dir[0];
        int nc = c + dir[1];
        if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited.Contains((nr, nc)))
        {
          pq.Enqueue((nr, nc), Math.Max(priority, grid[nr][nc]));
        }
      }
    }
    return -1;
  }

  public int[][] directions = new int[][]
  {
    new int[] {0, 1},
    new int[] {0, -1},
    new int[] {1, 0},
    new int[] {-1, 0}
  };
}
