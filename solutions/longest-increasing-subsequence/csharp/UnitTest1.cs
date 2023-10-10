namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.LengthOfLIS(new int[] { 10, 9, 2, 5, 3, 7, 101, 18 });
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.LengthOfLIS(new int[] { 0, 1, 0, 3, 2, 3 });
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var result = solution.LengthOfLIS(new int[] { 7, 7, 7, 7, 7, 7, 7 });
        Assert.AreEqual(1, result);
    }
}