namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var result = new Solution().CombinationSum(new int[] { 2, 3, 6, 7 }, 7);
        var expected = new List<IList<int>>()
        {
            new List<int>() { 2, 2, 3 },
            new List<int>() { 7 }
        };
        Compare(expected, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var result = new Solution().CombinationSum(new int[] { 2, 3, 5 }, 8);
        var expected = new List<IList<int>>()
        {
            new List<int>() { 2, 2, 2, 2 },
            new List<int>() { 2, 3, 3 },
            new List<int>() { 3, 5 }
        };
        Compare(expected, result);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var result = new Solution().CombinationSum(new int[] { 2 }, 1);
        var expected = new List<IList<int>>();
        Compare(expected, result);
    }

    public void Compare(IList<IList<int>> a, IList<IList<int>> b)
    {
        Assert.AreEqual(a.Count, b.Count);
        for (int i = 0; i < a.Count; i++)
        {
            Assert.AreEqual(a[i].Count, b[i].Count);
            for (int j = 0; j < a[i].Count; j++)
            {
                Assert.AreEqual(a[i][j], b[i][j]);
            }
        }
    }
}


public class Solution
{
    IList<IList<int>> result = new List<IList<int>>();
    public void backtrack(
        int[] candidates,
        int target,
        int index = 0,
        int total = 0,
        List<int>? path = null
        )
    {
        if (path == null)
        {
            path = new List<int>();
        }

        if (total == target)
        {
            result.Add(path.ToList());
            return;
        }

        if (total > target || index >= candidates.Length) return;

        path.Add(candidates[index]);
        backtrack(
            candidates,
            target,
            index,
            total + candidates[index],
            path
            );

        path.Remove(path.Last());

        backtrack(
            candidates,
            target,
            index + 1,
            total,
            path
            );

    }
    public IList<IList<int>> CombinationSum(int[] candidates, int target)
    {
        backtrack(candidates, target);
        return result;
    }
}