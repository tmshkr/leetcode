namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var grid = new int[][]
        {
            new int[] {0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
            new int[] {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
            new int[] {0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
            new int[] {0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
            new int[] {0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
            new int[] {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
            new int[] {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
            new int[] {0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0},
        };

        var solution = new Solution();
        var result = solution.MaxAreaOfIsland(grid);
        Assert.AreEqual(6, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var grid = new int[][]
        {
            new int[] {0, 0, 0, 0, 0, 0, 0, 0}
        };

        var solution = new Solution();
        var result = solution.MaxAreaOfIsland(grid);
        Assert.AreEqual(0, result);
    }
}