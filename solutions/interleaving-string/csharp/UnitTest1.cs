namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.IsInterleave("aabcc", "dbbca", "aadbbcbcac");
        Assert.AreEqual(true, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.IsInterleave("aabcc", "dbbca", "aadbbbaccc");
        Assert.AreEqual(false, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var result = solution.IsInterleave("", "", "");
        Assert.AreEqual(true, result);
    }
}