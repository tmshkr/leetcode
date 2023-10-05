namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.CountSubstrings("abc");
        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.CountSubstrings("aaa");
        Assert.AreEqual(6, result);
    }
}