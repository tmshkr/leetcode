namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var actual = new Solution().CombinationSum2(new int[] { 10, 1, 2, 7, 6, 1, 5 }, 8);
        var expected = new List<IList<int>>()
        {
            new List<int>(){1,1,6},
            new List<int>(){1,2,5},
            new List<int>(){1,7},
            new List<int>(){2,6}
        };
        compare(expected, actual);

    }

    [TestMethod]
    public void TestMethod2()
    {
        var actual = new Solution().CombinationSum2(new int[] { 2, 5, 2, 1, 2 }, 5);
        var expected = new List<IList<int>>()
        {
            new List<int>(){1,2,2},
            new List<int>(){5},
        };
        compare(expected, actual);

    }

    private void compare(IList<IList<int>> expected, IList<IList<int>> result)
    {
        Assert.AreEqual(expected.Count, result.Count);
        for (var i = 0; i < expected.Count; i++)
        {
            var a = expected[i].ToList();
            var b = result[i].ToList();
            b.Sort();
            CollectionAssert.AreEqual(a, b);
        }
    }
}
