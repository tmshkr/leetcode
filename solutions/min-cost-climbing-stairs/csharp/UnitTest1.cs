namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var sol = new Solution();
        var result = sol.MinCostClimbingStairs(new int[] { 10, 15, 20 });
        Assert.AreEqual(15, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var sol = new Solution();
        var result = sol.MinCostClimbingStairs(new int[] { 1, 100, 1, 1, 1, 100, 1, 1, 100, 1 });
        Assert.AreEqual(6, result);
    }
}