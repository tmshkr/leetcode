public class Solution
{
  public IList<string> FindItinerary(IList<IList<string>> tickets)
  {
    var map = new Dictionary<string, List<string>>();
    foreach (var ticket in tickets)
    {
      if (!map.TryGetValue(ticket[0], out var adj))
      {
        adj = new List<string>();
        map.Add(ticket[0], adj);
      }
      adj.Add(ticket[1]);
    }

    foreach (var adj in map.Values)
    {
      adj.Sort(Comparer<string>.Create((a, b) => string.Compare(b, a)));
    }

    var res = new Stack<string>();
    void dfs(string from)
    {
      if (map.TryGetValue(from, out var adj))
      {
        while (adj.Count > 0)
        {
          var next = adj.Last();
          adj.RemoveAt(adj.Count - 1);
          dfs(next);
        }
      }
      res.Push(from);
    }

    dfs("JFK");
    return res.ToList();
  }
}
