namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.Rob(new int[] { 2, 3, 2 });
        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.Rob(new int[] { 1, 2, 3, 1 });
        Assert.AreEqual(4, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var result = solution.Rob(new int[] { 1, 2, 3 });
        Assert.AreEqual(3, result);
    }
}