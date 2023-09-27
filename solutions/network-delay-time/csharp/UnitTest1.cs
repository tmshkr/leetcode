namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var input = new int[][] {
            new int[] { 2, 1, 1 },
            new int[] { 2, 3, 1 },
            new int[] { 3, 4, 1 }
        };
        var result = new Solution().NetworkDelayTime(input, 4, 2);
        Assert.AreEqual(2, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var input = new int[][] {
            new int[] { 1, 2, 1 }
        };
        var result = new Solution().NetworkDelayTime(input, 2, 1);
        Assert.AreEqual(1, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var input = new int[][] {
            new int[] { 1, 2, 1 }
        };
        var result = new Solution().NetworkDelayTime(input, 2, 2);
        Assert.AreEqual(-1, result);
    }
}