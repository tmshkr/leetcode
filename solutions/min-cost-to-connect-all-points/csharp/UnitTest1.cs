namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[][] points = new int[][]
        {
            new int[] {0, 0},
            new int[] {2, 2},
            new int[] {3, 10},
            new int[] {5, 2},
            new int[] {7, 0}
        };
        var res = new Solution().MinCostConnectPoints(points);
        Assert.AreEqual(20, res);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[][] points = new int[][]
        {
            new int[] {3, 12},
            new int[] {-2, 5},
            new int[] {-4, 1}
        };
        var res = new Solution().MinCostConnectPoints(points);
        Assert.AreEqual(18, res);
    }
}