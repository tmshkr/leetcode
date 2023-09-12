namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var s = new Solution();
        var result = s.Partition("aab");
        var expected = new List<List<string>>
        {
            new List<string> {"a", "a", "b"},
            new List<string> {"aa", "b"}
        };

        compare(expected, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var s = new Solution();
        var result = s.Partition("a");
        var expected = new List<List<string>>
        {
            new List<string> {"a"}
        };

        compare(expected, result);
    }

    private void compare(List<List<string>> expected, IList<IList<string>> result)
    {
        Assert.AreEqual(expected.Count, result.Count);
        for (int i = 0; i < expected.Count; i++)
        {
            CollectionAssert.AreEqual(expected[i], result[i].ToList());
        }
    }

}