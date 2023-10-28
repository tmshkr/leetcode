namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[][] triplets = new int[][]
        {
            new int[] {2, 5, 3},
            new int[] {1, 8, 4},
            new int[] {1, 7, 5}
        };
        int[] target = new int[] { 2, 7, 5 };
        bool expected = true;
        bool actual = new Solution().MergeTriplets(triplets, target);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[][] triplets = new int[][]
        {
            new int[] {3,4,5},
            new int[] {4,5,6}
        };
        int[] target = new int[] { 3, 2, 5 };
        bool expected = false;
        bool actual = new Solution().MergeTriplets(triplets, target);
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        int[][] triplets = new int[][]
        {
            new int[] {2,5,3},
            new int[] {2,3,4},
            new int[] {1,2,5},
            new int[] {5,2,3}
        };
        int[] target = new int[] { 5, 5, 5 };
        bool expected = true;
        bool actual = new Solution().MergeTriplets(triplets, target);
        Assert.AreEqual(expected, actual);
    }
}