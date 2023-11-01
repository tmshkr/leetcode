namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var intervals = new int[][]
        {
            new int[] {1, 2},
            new int[] {2, 3},
            new int[] {3, 4},
            new int[] {1, 3}
        };

        var solution = new Solution();
        var result = solution.EraseOverlapIntervals(intervals);

        Assert.AreEqual(1, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var intervals = new int[][]
        {
            new int[] {1, 2},
            new int[] {1, 2},
            new int[] {1, 2}
        };

        var solution = new Solution();
        var result = solution.EraseOverlapIntervals(intervals);

        Assert.AreEqual(2, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var intervals = new int[][]
        {
            new int[] {1, 2},
            new int[] {2, 3}
        };

        var solution = new Solution();
        var result = solution.EraseOverlapIntervals(intervals);

        Assert.AreEqual(0, result);
    }
}