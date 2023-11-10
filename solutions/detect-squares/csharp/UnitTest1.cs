namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var detectSquares = new DetectSquares();
        detectSquares.Add(new int[] { 3, 10 });
        detectSquares.Add(new int[] { 11, 2 });
        detectSquares.Add(new int[] { 3, 2 });
        Assert.AreEqual(1, detectSquares.Count(new int[] { 11, 10 }));
        Assert.AreEqual(0, detectSquares.Count(new int[] { 14, 8 }));
        detectSquares.Add(new int[] { 11, 2 });
        Assert.AreEqual(2, detectSquares.Count(new int[] { 11, 10 }));
    }
}