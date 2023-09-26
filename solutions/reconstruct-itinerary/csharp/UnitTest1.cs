namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var tickets = new List<IList<string>>
        {
            new List<string> {"MUC", "LHR"},
            new List<string> {"JFK", "MUC"},
            new List<string> {"SFO", "SJC"},
            new List<string> {"LHR", "SFO"}
        };
        var actual = new Solution().FindItinerary(tickets);
        var expected = new List<string> { "JFK", "MUC", "LHR", "SFO", "SJC" };
        CollectionAssert.AreEqual(expected, actual.ToList());
    }

    [TestMethod]
    public void TestMethod2()
    {
        var tickets = new List<IList<string>>
        {
            new List<string> {"JFK", "SFO"},
            new List<string> {"JFK", "ATL"},
            new List<string> {"SFO", "ATL"},
            new List<string> {"ATL", "JFK"},
            new List<string> {"ATL", "SFO"}
        };
        var actual = new Solution().FindItinerary(tickets);
        var expected = new List<string> { "JFK", "ATL", "JFK", "SFO", "ATL", "SFO" };
        CollectionAssert.AreEqual(expected, actual.ToList());
    }
}