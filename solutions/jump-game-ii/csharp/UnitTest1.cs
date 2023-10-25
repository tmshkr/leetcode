namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var nums = new int[] { 2, 3, 1, 1, 4 };
        var expected = 2;
        var actual = solution.Jump(nums);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var nums = new int[] { 2, 3, 0, 1, 4 };
        var expected = 2;
        var actual = solution.Jump(nums);
        Assert.AreEqual(expected, actual);
    }
}