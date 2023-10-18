namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var matrix = new int[][]
        {
            new int[] {9, 9, 4},
            new int[] {6, 6, 8},
            new int[] {2, 1, 1}
        };

        var solution = new Solution();
        var result = solution.LongestIncreasingPath(matrix);
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var matrix = new int[][]
        {
            new int[] {3, 4, 5},
            new int[] {3, 2, 6},
            new int[] {2, 2, 1}
        };

        var solution = new Solution();
        var result = solution.LongestIncreasingPath(matrix);
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var matrix = new int[][]
        {
            new int[] {1}
        };

        var solution = new Solution();
        var result = solution.LongestIncreasingPath(matrix);
        Assert.AreEqual(1, result);
    }
}