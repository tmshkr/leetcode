namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.HammingWeight(0b00000000000000000000000000001011);
        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.HammingWeight(0b00000000000000000000000010000000);
        Assert.AreEqual(1, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        var result = solution.HammingWeight(0b11111111111111111111111111111101);
        Assert.AreEqual(31, result);
    }
}