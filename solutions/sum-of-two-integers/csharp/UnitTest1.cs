namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.GetSum(1, 2));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(1, solution.GetSum(-2, 3));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        Assert.AreEqual(5, solution.GetSum(2, 3));
    }
}