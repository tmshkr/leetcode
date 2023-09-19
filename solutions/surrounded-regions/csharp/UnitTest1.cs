namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var board = new char[][]
        {
            new char[] {'X', 'X', 'X', 'X'},
            new char[] {'X', 'O', 'O', 'X'},
            new char[] {'X', 'X', 'O', 'X'},
            new char[] {'X', 'O', 'X', 'X'}
        };

        var solution = new Solution();
        solution.Solve(board);

        var expected = new char[][]
        {
            new char[] {'X', 'X', 'X', 'X'},
            new char[] {'X', 'X', 'X', 'X'},
            new char[] {'X', 'X', 'X', 'X'},
            new char[] {'X', 'O', 'X', 'X'}
        };

        compare(expected, board);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var board = new char[][]
        {
            new char[] {'X'}
        };

        var solution = new Solution();
        solution.Solve(board);

        var expected = new char[][]
        {
            new char[] {'X'}
        };

        compare(expected, board);
    }

    private void compare(char[][] expected, char[][] actual)
    {
        Assert.AreEqual(expected.Length, actual.Length);
        for (int i = 0; i < expected.Length; i++)
        {
            CollectionAssert.AreEqual(expected[i], actual[i]);
        }
    }
}