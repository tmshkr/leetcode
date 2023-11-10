namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.Multiply("123", "456");
        Assert.AreEqual("56088", result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.Multiply("2", "3");
        Assert.AreEqual("6", result);
    }
}