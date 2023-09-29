namespace csharp;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        var n = 3;
        var flights = new int[][]
        {
            new int[] {0, 1, 100},
            new int[] {1, 2, 100},
            new int[] {0, 2, 500}
        };
        var src = 0;
        var dst = 2;
        var k = 1;
        var expected = 200;

        var actual = new Solution().FindCheapestPrice(n, flights, src, dst, k);

        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod2()
    {
        var n = 3;
        var flights = new int[][]
        {
            new int[] {0, 1, 100},
            new int[] {1, 2, 100},
            new int[] {0, 2, 500}
        };
        var src = 0;
        var dst = 2;
        var k = 0;
        var expected = 500;

        var actual = new Solution().FindCheapestPrice(n, flights, src, dst, k);

        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void TestMethod3()
    {
        var n = 4;
        var flights = new int[][]
        {
            new int[] {0, 1, 100},
            new int[] {1, 2, 100},
            new int[] {2, 0, 100},
            new int[] {1, 3, 600},
            new int[] {2, 3, 200}
        };
        var src = 0;
        var dst = 3;
        var k = 1;
        var expected = 700;

        var actual = new Solution().FindCheapestPrice(n, flights, src, dst, k);

        Assert.AreEqual(expected, actual);
    }
}