namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var grid = new int[][]
        {
            new int[] { 2, 1, 1 },
            new int[] { 1, 1, 0 },
            new int[] { 0, 1, 1 }
        };

        var expected = 4;
        var actual = new Solution().OrangesRotting(grid);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var grid = new int[][]
        {
            new int[] { 2, 1, 1 },
            new int[] { 0, 1, 1 },
            new int[] { 1, 0, 1 }
        };

        var expected = -1;
        var actual = new Solution().OrangesRotting(grid);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var grid = new int[][]
        {
            new int[] { 0, 2 }
        };

        var expected = 0;
        var actual = new Solution().OrangesRotting(grid);
        Assert.AreEqual(expected, actual);
    }
}