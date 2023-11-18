namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.GetConcatenation(new int[] { 1, 2, 1 });
        CollectionAssert.AreEqual(new int[] { 1, 2, 1, 1, 2, 1 }, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.GetConcatenation(new int[] { 1, 3, 2, 1 });
        CollectionAssert.AreEqual(new int[] { 1, 3, 2, 1, 1, 3, 2, 1 }, result);
    }
}