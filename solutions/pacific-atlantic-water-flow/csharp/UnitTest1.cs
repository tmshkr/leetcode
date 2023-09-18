namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var heights = new int[][]
        {
            new int[] {1, 2, 2, 3, 5},
            new int[] {3, 2, 3, 4, 4},
            new int[] {2, 4, 5, 3, 1},
            new int[] {6, 7, 1, 4, 5},
            new int[] {5, 1, 1, 2, 4}
        };
        var expected = new int[][]
        {
            new int[] {0, 4},
            new int[] {1, 3},
            new int[] {1, 4},
            new int[] {2, 2},
            new int[] {3, 0},
            new int[] {3, 1},
            new int[] {4, 0}
        };
        var actual = new Solution().PacificAtlantic(heights);
        compare(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var heights = new int[][]
        {
            new int[] {1}
        };
        var expected = new int[][]
        {
            new int[] {0, 0}
        };
        var actual = new Solution().PacificAtlantic(heights);
        compare(expected, actual);
    }

    private void compare(int[][] expected, IList<IList<int>> actual)
    {
        Assert.AreEqual(expected.Length, actual.Count);
        for (int i = 0; i < expected.Length; i++)
        {
            CollectionAssert.AreEquivalent(expected[i], actual[i].ToList());
        }
    }
}