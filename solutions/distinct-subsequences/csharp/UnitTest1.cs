namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        Assert.AreEqual(3, s.NumDistinct("rabbbit", "rabbit"));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        Assert.AreEqual(5, s.NumDistinct("babgbag", "bag"));
    }
}