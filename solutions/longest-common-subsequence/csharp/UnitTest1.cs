namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.LongestCommonSubsequence("abcde", "ace"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.LongestCommonSubsequence("abc", "abc"));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        Assert.AreEqual(0, solution.LongestCommonSubsequence("abc", "def"));
    }
}