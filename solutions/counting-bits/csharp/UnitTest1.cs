namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.CountBits(2);
        Assert.AreEqual(3, result.Length);
        Assert.AreEqual(0, result[0]);
        Assert.AreEqual(1, result[1]);
        Assert.AreEqual(1, result[2]);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.CountBits(5);
        Assert.AreEqual(6, result.Length);
        Assert.AreEqual(0, result[0]);
        Assert.AreEqual(1, result[1]);
        Assert.AreEqual(1, result[2]);
        Assert.AreEqual(2, result[3]);
        Assert.AreEqual(1, result[4]);
        Assert.AreEqual(2, result[5]);
    }
}