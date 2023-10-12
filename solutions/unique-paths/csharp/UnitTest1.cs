namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(28, solution.UniquePaths(3, 7));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.UniquePaths(3, 2));
    }
}