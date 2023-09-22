namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int numCourses = 2;
        var prerequisites = new int[][]
        {
            new int[] { 1, 0 }
        };
        var expected = new int[] { 0, 1 };
        var actual = new Solution().FindOrder(numCourses, prerequisites);
        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int numCourses = 4;
        var prerequisites = new int[][]
        {
            new int[] { 1, 0 },
            new int[] { 2, 0 },
            new int[] { 3, 1 },
            new int[] { 3, 2 }
        };
        var expected = new int[] { 0, 1, 2, 3 };
        var actual = new Solution().FindOrder(numCourses, prerequisites);
        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        int numCourses = 1;
        var prerequisites = new int[][] { };
        var expected = new int[] { 0 };
        var actual = new Solution().FindOrder(numCourses, prerequisites);
        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod4()
    {
        int numCourses = 6;
        var prerequisites = new int[][]
        {
            new int[] { 0,1 },
            new int[] { 0,2 },
            new int[] { 1,3 },
            new int[] { 3,2 },
            new int[] { 4,0 },
            new int[] { 5,0 }
        };

        var expected = new int[] { 2, 3, 1, 0, 4, 5 };
        var actual = new Solution().FindOrder(numCourses, prerequisites);
        CollectionAssert.AreEqual(expected, actual);
    }
}