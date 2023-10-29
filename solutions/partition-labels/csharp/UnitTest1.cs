namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var solution = new Solution();
        var result = solution.PartitionLabels("ababcbacadefegdehijhklij");
        Assert.AreEqual(3, result.Count);
        Assert.AreEqual(9, result[0]);
        Assert.AreEqual(7, result[1]);
        Assert.AreEqual(8, result[2]);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var solution = new Solution();
        var result = solution.PartitionLabels("eccbbbbdec");
        Assert.AreEqual(1, result.Count);
        Assert.AreEqual(10, result[0]);
    }
}