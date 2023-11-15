namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var nums = new int[] { 3, 0, 1 };
        var expected = 2;
        var actual = solution.MissingNumber(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var nums = new int[] { 0, 1 };
        var expected = 2;
        var actual = solution.MissingNumber(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var nums = new int[] { 9, 6, 4, 2, 3, 5, 7, 0, 1 };
        var expected = 8;
        var actual = solution.MissingNumber(nums);
        Assert.AreEqual(expected, actual);
    }

}