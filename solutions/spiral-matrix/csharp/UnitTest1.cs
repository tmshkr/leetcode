namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var matrix = new int[][]
        {
            new int[] {1, 2, 3},
            new int[] {4, 5, 6},
            new int[] {7, 8, 9}
        };
        var expected = new int[] { 1, 2, 3, 6, 9, 8, 7, 4, 5 };
        var actual = new Solution().SpiralOrder(matrix);
        CollectionAssert.AreEqual(expected, actual.ToArray());
    }

    [TestMethod]
    public void TestMethod2()
    {
        var matrix = new int[][]
        {
            new int[] {1, 2, 3, 4},
            new int[] {5, 6, 7, 8},
            new int[] {9, 10, 11, 12}
        };
        var expected = new int[] { 1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7 };
        var actual = new Solution().SpiralOrder(matrix);
        CollectionAssert.AreEqual(expected, actual.ToArray());
    }
}