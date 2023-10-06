namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.AreEqual(2, s.NumDecodings("12"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.AreEqual(3, s.NumDecodings("226"));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var s = new Solution();
        Assert.AreEqual(0, s.NumDecodings("06"));
    }
}