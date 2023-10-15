namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.Change(5, new[] { 1, 2, 5 });
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.Change(3, new[] { 2 });
        Assert.AreEqual(0, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var result = solution.Change(10, new[] { 10 });
        Assert.AreEqual(1, result);
    }
}