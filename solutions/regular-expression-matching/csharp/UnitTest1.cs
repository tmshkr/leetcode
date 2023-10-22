namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.IsTrue(s.IsMatch("aa", "a*"));
        Assert.IsTrue(s.IsMatch("aa", "a*"));
        Assert.IsTrue(s.IsMatch("ab", ".*"));
        Assert.IsTrue(s.IsMatch("aab", "c*a*b"));
        Assert.IsFalse(s.IsMatch("mississippi", "mis*is*p*."));
    }
}