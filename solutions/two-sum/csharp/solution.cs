[TestClass]
public class UnitTests
{
    [TestMethod]
    public void TestMethod1()
    {
        // Arrange
        MySolution s = new MySolution();

        // Act
        int[] res = s.TwoSum(new int[] { 2, 7, 11, 15 }, 9);

        // Assert
        compare(new int[] { 0, 1 }, res);
    }

    [TestMethod]
    public void TestMethod2()
    {
        // Arrange
        MySolution s = new MySolution();

        // Act
        int[] res = s.TwoSum(new int[] { 3, 2, 4 }, 6);

        // Assert
        compare(new int[] { 1, 2 }, res);
    }

    [TestMethod]
    public void TestMethod3()
    {
        // Arrange
        MySolution s = new MySolution();

        // Act
        int[] res = s.TwoSum(new int[] { 3, 3 }, 6);

        // Assert
        compare(new int[] { 0, 1 }, res);
    }

    public void compare(int[] a, int[] b)
    {
        Assert.AreEqual(a.Length, b.Length);
        for (int i = 0; i < a.Length; i++)
        {
            Assert.AreEqual(a[i], b[i]);
        }
    }
}

public class MySolution
{
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> indices = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int diff = target - nums[i];
            if (indices.ContainsKey(diff))
            {
                return new int[] { indices[diff], i };
            }
            indices[nums[i]] = i;
        }
        return null;
    }
}


