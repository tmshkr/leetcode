namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var gas = new[] { 1, 2, 3, 4, 5 };
        var cost = new[] { 3, 4, 5, 1, 2 };

        var solution = new Solution();
        var result = solution.CanCompleteCircuit(gas, cost);

        Assert.AreEqual(3, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var gas = new[] { 2, 3, 4 };
        var cost = new[] { 3, 4, 3 };

        var solution = new Solution();
        var result = solution.CanCompleteCircuit(gas, cost);

        Assert.AreEqual(-1, result);
    }
}