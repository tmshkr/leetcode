namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(321, solution.Reverse(123));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(-321, solution.Reverse(-123));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        Assert.AreEqual(21, solution.Reverse(120));
    }
}