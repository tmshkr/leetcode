namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[] nums = new int[] { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
        int expected = 6;
        int actual = new Solution().MaxSubArray(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[] nums = new int[] { 1 };
        int expected = 1;
        int actual = new Solution().MaxSubArray(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        int[] nums = new int[] { 5, 4, -1, 7, 8 };
        int expected = 23;
        int actual = new Solution().MaxSubArray(nums);
        Assert.AreEqual(expected, actual);
    }
}