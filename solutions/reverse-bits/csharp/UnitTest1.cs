namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        uint original = 0b00111001011110000010100101000000;
        uint reversed = 0b00000010100101000001111010011100;
        var solution = new Solution();
        Assert.AreEqual(reversed, solution.reverseBits(original));
    }

    [TestMethod]
    public void TestMethod2()
    {
        uint original = 0b11111111111111111111111111111101;
        uint reversed = 0b10111111111111111111111111111111;
        var solution = new Solution();
        Assert.AreEqual(reversed, solution.reverseBits(original));
    }
}