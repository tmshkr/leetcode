namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var matrix = new int[][] {
            new int[] { 1, 2, 3 },
            new int[] { 4, 5, 6 },
            new int[] { 7, 8, 9 }
        };

        var expected = new int[][] {
            new int[] { 7, 4, 1 },
            new int[] { 8, 5, 2 },
            new int[] { 9, 6, 3 }
        };

        var solution = new Solution();
        solution.Rotate(matrix);

        CollectionAssert.AreEqual(expected[0], matrix[0]);
        CollectionAssert.AreEqual(expected[1], matrix[1]);
        CollectionAssert.AreEqual(expected[2], matrix[2]);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var matrix = new int[][] {
            new int[] { 5, 1, 9, 11 },
            new int[] { 2, 4, 8, 10 },
            new int[] { 13, 3, 6, 7 },
            new int[] { 15, 14, 12, 16 }
        };

        var expected = new int[][] {
            new int[] { 15, 13, 2, 5 },
            new int[] { 14, 3, 4, 1 },
            new int[] { 12, 6, 8, 9 },
            new int[] { 16, 7, 10, 11 }
        };

        var solution = new Solution();
        solution.Rotate(matrix);

        CollectionAssert.AreEqual(expected[0], matrix[0]);
        CollectionAssert.AreEqual(expected[1], matrix[1]);
        CollectionAssert.AreEqual(expected[2], matrix[2]);
        CollectionAssert.AreEqual(expected[3], matrix[3]);
    }
}