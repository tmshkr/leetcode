public class Solution
{
  public IList<string> FindItinerary(IList<IList<string>> tickets)
  {
    Dictionary<string, List<string>> graph = new Dictionary<string, List<string>>();

    // Populate the graph
    foreach (var ticket in tickets)
    {
      string from = ticket[0];
      string to = ticket[1];

      if (!graph.ContainsKey(from))
      {
        graph[from] = new List<string>();
      }

      graph[from].Add(to);
    }

    // Sort destinations in lexicographical order
    foreach (var kvp in graph)
    {
      kvp.Value.Sort();
    }

    List<string> result = new List<string>();

    void DFS(string node)
    {
      if (graph.ContainsKey(node))
      {
        List<string> destinations = graph[node];
        while (destinations.Any())
        {
          string nextNode = destinations[0];
          destinations.RemoveAt(0);
          DFS(nextNode);
        }
      }
      result.Insert(0, node); // Insert at the beginning to reverse the order
    }

    DFS("JFK");

    return result;
  }
}
