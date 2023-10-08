namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new int[] { 2, 3, -2, 4 };
        var expected = 6;
        var actual = new Solution().MaxProduct(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new int[] { -2, 0, -1 };
        var expected = 0;
        var actual = new Solution().MaxProduct(nums);
        Assert.AreEqual(expected, actual);
    }
}