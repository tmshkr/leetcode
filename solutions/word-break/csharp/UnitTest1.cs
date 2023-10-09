namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.IsTrue(s.WordBreak("leetcode", new List<string> { "leet", "code" }));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.IsTrue(s.WordBreak("applepenapple", new List<string> { "apple", "pen" }));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var s = new Solution();
        Assert.IsFalse(s.WordBreak("catsandog", new List<string> { "cats", "dog", "sand", "and", "cat" }));
    }
}