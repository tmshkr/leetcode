namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new int[] { 3, 1, 5, 8 };
        var expected = 167;
        var actual = new Solution().MaxCoins(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new int[] { 1, 5 };
        var expected = 10;
        var actual = new Solution().MaxCoins(nums);
        Assert.AreEqual(expected, actual);
    }
}