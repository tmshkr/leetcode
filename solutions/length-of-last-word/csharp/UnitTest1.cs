namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.AreEqual(5, s.LengthOfLastWord("Hello World"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.AreEqual(4, s.LengthOfLastWord("   fly me   to   the moon  "));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var s = new Solution();
        Assert.AreEqual(6, s.LengthOfLastWord("luffy is still joyboy"));
    }
}