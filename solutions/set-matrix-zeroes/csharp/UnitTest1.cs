namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var matrix = new int[][] {
            new int[] { 1, 1, 1 },
            new int[] { 1, 0, 1 },
            new int[] { 1, 1, 1 }
        };
        var expected = new int[][] {
            new int[] { 1, 0, 1 },
            new int[] { 0, 0, 0 },
            new int[] { 1, 0, 1 }
        };
        new Solution().SetZeroes(matrix);
        compare(expected, matrix);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var matrix = new int[][] {
            new int[] { 0, 1, 2, 0 },
            new int[] { 3, 4, 5, 2 },
            new int[] { 1, 3, 1, 5 }
        };
        var expected = new int[][] {
            new int[] { 0, 0, 0, 0 },
            new int[] { 0, 4, 5, 0 },
            new int[] { 0, 3, 1, 0 }
        };
        new Solution().SetZeroes(matrix);
        compare(expected, matrix);
    }

    private void compare(int[][] expected, int[][] actual)
    {
        Assert.AreEqual(expected.Length, actual.Length);
        for (var i = 0; i < expected.Length; i++)
        {
            CollectionAssert.AreEqual(expected[i], actual[i]);
        }
    }
}