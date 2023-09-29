public class Solution
{
  public int FindCheapestPrice(int n, int[][] flights, int src, int dst, int k)
  {
    var prices = new int[n];
    Array.Fill(prices, int.MaxValue);
    prices[src] = 0;

    for (var time = 0; time < k + 1; time++)
    {
      var tempPrices = prices.Clone() as int[];

      foreach (var item in flights)
      {
        var source = item[0];
        var dest = item[1];
        var price = item[2];
        if (prices[source] == int.MaxValue) continue;
        if (prices[source] + price < tempPrices[dest])
        {
          tempPrices[dest] = prices[source] + price;
        }
      }
      prices = tempPrices;
    }

    return (prices[dst] == int.MaxValue) ? -1 : prices[dst];
  }
}