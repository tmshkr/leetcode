namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        Assert.IsTrue(solution.CanJump(new[] { 2, 3, 1, 1, 4 }));
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        Assert.IsFalse(solution.CanJump(new[] { 3, 2, 1, 0, 4 }));
    }
}