namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.IsTrue(solution.IsHappy(19));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.IsFalse(solution.IsHappy(2));
    }
}