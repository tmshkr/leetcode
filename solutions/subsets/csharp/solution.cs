namespace csharp;
using System;
using System.Text.Json;


[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[] nums = new int[] { 1, 2, 3 };
        int[][] expected = new int[][] {
            new int[] { },
            new int[] { 1 },
            new int[] { 2 },
            new int[] { 3 },
            new int[] { 1, 2 },
            new int[] { 1, 3 },
            new int[] { 2, 3 },
            new int[] { 1, 2, 3 }
        };
        IList<IList<int>> res = new Solution().Subsets(nums);
        Compare(expected, res);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[] nums = new int[] { 0 };
        int[][] expected = new int[][] {
            new int[] { },
            new int[] { 0 }
        };
        IList<IList<int>> res = new Solution().Subsets(nums);
        Compare(expected, res);
    }

    public void Compare(int[][] a, IList<IList<int>> b)
    {
        Assert.AreEqual(a.Length, b.Count);
        HashSet<string> s = new HashSet<string>();

        foreach (int[] item in a)
        {
            s.Add(JsonSerializer.Serialize(item));
        }
        foreach (IList<int> item in b)
        {
            Assert.IsTrue(s.Contains(JsonSerializer.Serialize(item)));
        }
    }
}

public class Solution
{
    private List<int> subset = new List<int>();
    private List<IList<int>> result = new List<IList<int>>();
    private void backtrack(int i, int[] nums)
    {
        if (i >= nums.Length)
        {
            result.Add(new List<int>(subset));
            return;
        }
        subset.Add(nums[i]);
        backtrack(i + 1, nums);
        subset.Remove(nums[i]);
        backtrack(i + 1, nums);

    }
    public IList<IList<int>> Subsets(int[] nums)
    {
        backtrack(0, nums);
        return result;
    }
}