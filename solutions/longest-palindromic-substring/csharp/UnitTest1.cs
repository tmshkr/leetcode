namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.AreEqual("bab", s.LongestPalindrome("babad"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.AreEqual("bb", s.LongestPalindrome("cbbd"));
    }
}