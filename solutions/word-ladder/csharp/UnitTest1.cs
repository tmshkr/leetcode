namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var beginWord = "hit";
        var endWord = "cog";
        var wordList = new List<string> { "hot", "dot", "dog", "lot", "log", "cog" };

        var result = new Solution().LadderLength(beginWord, endWord, wordList);

        Assert.AreEqual(5, result);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var beginWord = "hit";
        var endWord = "cog";
        var wordList = new List<string> { "hot", "dot", "dog", "lot", "log" };

        var result = new Solution().LadderLength(beginWord, endWord, wordList);

        Assert.AreEqual(0, result);
    }
}