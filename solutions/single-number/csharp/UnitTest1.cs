namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new int[] { 2, 2, 1 };
        var expected = 1;
        var actual = new Solution().SingleNumber(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new int[] { 4, 1, 2, 1, 2 };
        var expected = 4;
        var actual = new Solution().SingleNumber(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var nums = new int[] { 1 };
        var expected = 1;
        var actual = new Solution().SingleNumber(nums);
        Assert.AreEqual(expected, actual);
    }
}