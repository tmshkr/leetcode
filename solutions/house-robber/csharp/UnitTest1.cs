namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new[] { 1, 2, 3, 1 };
        var expected = 4;
        var actual = new Solution().Rob(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new[] { 2, 7, 9, 3, 1 };
        var expected = 12;
        var actual = new Solution().Rob(nums);
        Assert.AreEqual(expected, actual);
    }
}