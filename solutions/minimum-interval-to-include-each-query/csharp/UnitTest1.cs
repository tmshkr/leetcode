namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var intervals = new int[4][];
        intervals[0] = new int[2] { 1, 4 };
        intervals[1] = new int[2] { 2, 4 };
        intervals[2] = new int[2] { 3, 6 };
        intervals[3] = new int[2] { 4, 4 };

        var queries = new int[4] { 2, 3, 4, 5 };

        var result = new Solution().MinInterval(intervals, queries);

        Assert.AreEqual(3, result[0]);
        Assert.AreEqual(3, result[1]);
        Assert.AreEqual(1, result[2]);
        Assert.AreEqual(4, result[3]);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var intervals = new int[4][];
        intervals[0] = new int[2] { 2, 3 };
        intervals[1] = new int[2] { 2, 5 };
        intervals[2] = new int[2] { 1, 8 };
        intervals[3] = new int[2] { 20, 25 };

        var queries = new int[4] { 2, 19, 5, 22 };

        var result = new Solution().MinInterval(intervals, queries);

        Assert.AreEqual(2, result[0]);
        Assert.AreEqual(-1, result[1]);
        Assert.AreEqual(4, result[2]);
        Assert.AreEqual(6, result[3]);
    }
}