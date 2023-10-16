namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new[] { 1, 1, 1, 1, 1 };
        var target = 3;
        var expected = 5;
        var actual = new Solution().FindTargetSumWays(nums, target);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new[] { 1 };
        var target = 1;
        var expected = 1;
        var actual = new Solution().FindTargetSumWays(nums, target);
        Assert.AreEqual(expected, actual);
    }
}