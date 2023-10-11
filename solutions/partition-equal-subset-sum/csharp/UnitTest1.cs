namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new int[] { 1, 5, 11, 5 };
        var expected = true;
        var actual = new Solution().CanPartition(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new int[] { 1, 2, 3, 5 };
        var expected = false;
        var actual = new Solution().CanPartition(nums);
        Assert.AreEqual(expected, actual);
    }
}