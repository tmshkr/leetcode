namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[] hand = { 1, 2, 3, 6, 2, 3, 4, 7, 8 };
        int W = 3;
        bool expected = true;
        bool actual = new Solution().IsNStraightHand(hand, W);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[] hand = { 1, 2, 3, 4, 5 };
        int W = 4;
        bool expected = false;
        bool actual = new Solution().IsNStraightHand(hand, W);
        Assert.AreEqual(expected, actual);
    }
}