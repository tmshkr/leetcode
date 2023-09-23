namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var edges = new int[][]
        {
            new int[] {1, 2},
            new int[] {1, 3},
            new int[] {2, 3}
        };

        var actual = new Solution().FindRedundantConnection(edges);
        var expected = new int[] { 2, 3 };

        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var edges = new int[][]
        {
            new int[] {1, 2},
            new int[] {2, 3},
            new int[] {3, 4},
            new int[] {1, 4},
            new int[] {1, 5}
        };

        var actual = new Solution().FindRedundantConnection(edges);
        var expected = new int[] { 1, 4 };

        CollectionAssert.AreEqual(expected, actual);
    }
}