namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.IsTrue(s.CheckValidString("()"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.IsTrue(s.CheckValidString("(*)"));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var s = new Solution();
        Assert.IsTrue(s.CheckValidString("(*))"));
    }
}