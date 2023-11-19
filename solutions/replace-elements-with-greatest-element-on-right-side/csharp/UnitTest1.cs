namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.ReplaceElements(new int[] { 17, 18, 5, 4, 6, 1 });
        CollectionAssert.AreEqual(new int[] { 18, 6, 6, 6, 1, -1 }, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.ReplaceElements(new int[] { 400 });
        CollectionAssert.AreEqual(new int[] { -1 }, result);
    }
}