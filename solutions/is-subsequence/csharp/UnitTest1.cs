namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.IsTrue(s.IsSubsequence("abc", "ahbgdc"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.IsFalse(s.IsSubsequence("axc", "ahbgdc"));
    }
}