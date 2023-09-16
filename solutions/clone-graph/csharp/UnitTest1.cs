namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var adjList = new List<List<int>>
        {
            new List<int>{2,4},
            new List<int>{1,3},
            new List<int>{2,4},
            new List<int>{1,3}
        };
        var actual = new Solution().CloneGraph(createGraph(adjList));
        var expected = createGraph(adjList);
        compare(actual, expected);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var adjList = new List<List<int>>
        {
            new List<int>(),
        };
        var actual = new Solution().CloneGraph(createGraph(adjList));
        var expected = createGraph(adjList);
        compare(actual, expected);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var adjList = new List<List<int>>();
        var actual = new Solution().CloneGraph(createGraph(adjList));
        var expected = createGraph(adjList);
        compare(actual, expected);
    }

    private Node? createGraph(List<List<int>> adjList)
    {
        var graph = new List<Node>();
        for (var i = 0; i < adjList.Count; i++)
        {
            graph.Add(new Node(i + 1));
        }
        for (var i = 0; i < adjList.Count; i++)
        {
            foreach (var j in adjList[i])
            {
                graph[i].neighbors.Add(graph[j - 1]);
            }
        }
        return graph.Count > 0 ? graph[0] : null;
    }

    private void compare(Node? a, Node? b)
    {
        if (a == null && b == null) return;
        if (a.visited && b.visited) return;
        a.visited = true;
        b.visited = true;

        Assert.AreEqual(a.val, b.val);
        Assert.AreEqual(a.neighbors.Count, b.neighbors.Count);
        for (var i = 0; i < a.neighbors.Count; i++)
        {
            compare(a.neighbors[i], b.neighbors[i]);
        }
    }
}