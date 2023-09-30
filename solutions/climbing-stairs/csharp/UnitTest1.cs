namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.AreEqual(2, solution.ClimbStairs(2));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.AreEqual(3, solution.ClimbStairs(3));
    }

    [TestMethod]
    public void TestMethod3()
    {
        var solution = new Solution();
        Assert.AreEqual(433494437, solution.ClimbStairs(42));
    }
}