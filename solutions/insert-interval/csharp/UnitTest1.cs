namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var intervals = new int[][]
        {
            new int[] {1, 3},
            new int[] {6, 9}
        };
        var newInterval = new int[] { 2, 5 };
        var expected = new int[][]
        {
            new int[] {1, 5},
            new int[] {6, 9}
        };
        var actual = new Solution().Insert(intervals, newInterval);
        compare(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var intervals = new int[][]
        {
            new int[] {1, 2},
            new int[] {3, 5},
            new int[] {6, 7},
            new int[] {8, 10},
            new int[] {12, 16}
        };
        var newInterval = new int[] { 4, 8 };
        var expected = new int[][]
        {
            new int[] {1, 2},
            new int[] {3, 10},
            new int[] {12, 16}
        };
        var actual = new Solution().Insert(intervals, newInterval);
        compare(expected, actual);
    }

    private static void compare(int[][] expected, int[][] actual)
    {
        Assert.AreEqual(expected.Length, actual.Length);
        for (int i = 0; i < expected.Length; i++)
        {
            CollectionAssert.AreEqual(expected[i], actual[i]);
        }
    }
}