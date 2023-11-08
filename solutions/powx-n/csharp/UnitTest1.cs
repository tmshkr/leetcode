namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(1024.00000, solution.MyPow(2.00000, 10));
        Assert.AreEqual(9.26100, solution.MyPow(2.10000, 3));
        Assert.AreEqual(0.25000, solution.MyPow(2.00000, -2));
    }
}