namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var grid = new int[][]
        {
            new int[] {0, 2},
            new int[] {1, 3}
        };
        var result = new Solution().SwimInWater(grid);
        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var grid = new int[][]
        {
            new int[] {0, 1, 2, 3, 4},
            new int[] {24, 23, 22, 21, 5},
            new int[] {12, 13, 14, 15, 16},
            new int[] {11, 17, 18, 19, 20},
            new int[] {10, 9, 8, 7, 6}
        };
        var result = new Solution().SwimInWater(grid);
        Assert.AreEqual(16, result);
    }
}