namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var result = new Solution().LetterCombinations("23");
        var expected = new List<string> { "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf" };
        CollectionAssert.AreEqual(expected, result.ToList());
    }

    [TestMethod]
    public void TestMethod2()
    {
        var result = new Solution().LetterCombinations("");
        var expected = new List<string> { };
        CollectionAssert.AreEqual(expected, result.ToList());
    }

    [TestMethod]
    public void TestMethod3()
    {
        var result = new Solution().LetterCombinations("2");
        var expected = new List<string> { "a", "b", "c" };
        CollectionAssert.AreEqual(expected, result.ToList());
    }
}