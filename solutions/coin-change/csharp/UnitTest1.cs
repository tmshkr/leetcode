namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var coins = new[] { 1, 2, 5 };
        var amount = 11;
        var expected = 3;
        var actual = new Solution().CoinChange(coins, amount);

        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var coins = new[] { 2 };
        var amount = 3;
        var expected = -1;
        var actual = new Solution().CoinChange(coins, amount);

        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var coins = new[] { 1 };
        var amount = 0;
        var expected = 0;
        var actual = new Solution().CoinChange(coins, amount);

        Assert.AreEqual(expected, actual);
    }
}