namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var result = new Solution().SolveNQueens(4);
        var expected = new List<IList<string>>
        {
            new List<string>{".Q..","...Q","Q...","..Q."},
            new List<string>{"..Q.","Q...","...Q",".Q.."}
        };
        compare(expected, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var result = new Solution().SolveNQueens(1);
        var expected = new List<IList<string>>
        {
            new List<string>{"Q"}
        };
        compare(expected, result);
    }

    private void compare(List<IList<string>> expected, IList<IList<string>> result)
    {
        Assert.AreEqual(expected.Count, result.Count);
        for (int i = 0; i < expected.Count; i++)
        {
            CollectionAssert.AreEqual(expected[i].ToList(), result[i].ToList());
        }
    }
}