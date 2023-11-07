namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        int[] digits = { 1, 2, 3 };
        int[] expected = { 1, 2, 4 };
        int[] actual = new Solution().PlusOne(digits);
        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        int[] digits = { 4, 3, 2, 1 };
        int[] expected = { 4, 3, 2, 2 };
        int[] actual = new Solution().PlusOne(digits);
        CollectionAssert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        int[] digits = { 9 };
        int[] expected = { 1, 0 };
        int[] actual = new Solution().PlusOne(digits);
        CollectionAssert.AreEqual(expected, actual);
    }
}