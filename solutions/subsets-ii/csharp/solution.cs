namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var nums = new int[] { 1, 2, 2 };
        var expected = new List<IList<int>>()
        {
            new List<int>() { },
            new List<int>() { 1 },
            new List<int>() { 1, 2 },
            new List<int>() { 1, 2, 2 },
            new List<int>() { 2 },
            new List<int>() { 2, 2 },
        };

        var result = new Solution().SubsetsWithDup(nums);
        compare(expected, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var nums = new int[] { 0 };
        var expected = new List<IList<int>>()
        {
            new List<int>() { },
            new List<int>() { 0 }
        };

        var result = new Solution().SubsetsWithDup(nums);
        compare(expected, result);
    }

    private void compare(IList<IList<int>> expected, IList<IList<int>> result)
    {
        Assert.AreEqual(expected.Count, result.Count);
        for (var i = 0; i < expected.Count; i++)
        {
            CollectionAssert.AreEqual(expected[i].ToList(), result[i].ToList());
        }
    }
}

public class Solution
{

    public List<IList<int>> SubsetsWithDup(int[] nums)
    {
        var list = new List<IList<int>>();
        Array.Sort(nums);
        backTrack(list, new List<int>(), nums, 0);
        return list;
    }

    private void backTrack(List<IList<int>> list, List<int> curr, int[] nums, int start)
    {
        list.Add(new List<int>(curr));
        for (var i = start; i < nums.Length; i++)
        {
            if (i > start && nums[i] == nums[i - 1]) continue;
            curr.Add(nums[i]);
            backTrack(list, curr, nums, i + 1);
            curr.RemoveAt(curr.Count - 1);
        }
    }
}