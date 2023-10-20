namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.MinDistance("horse", "ros"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(5, solution.MinDistance("intention", "execution"));
    }
}