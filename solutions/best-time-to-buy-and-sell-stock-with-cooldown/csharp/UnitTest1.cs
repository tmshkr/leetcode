namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.MaxProfit(new int[] { 1, 2, 3, 0, 2 });
        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.MaxProfit(new int[] { 1 });
        Assert.AreEqual(0, result);
    }
}