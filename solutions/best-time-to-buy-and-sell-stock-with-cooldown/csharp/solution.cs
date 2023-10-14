public class Solution
{
  public int MaxProfit(int[] prices)
  {
    int buy = -prices[0];
    int sell = 0;
    int cooldown = 0;

    for (int i = 1; i < prices.Length; i++)
    {
      int prevBuy = buy;
      int prevSell = sell;
      int prevCooldown = cooldown;

      buy = Math.Max(prevBuy, prevCooldown - prices[i]);
      sell = Math.Max(prevSell, prevBuy + prices[i]);
      cooldown = Math.Max(prevCooldown, prevSell);
    }
    return Math.Max(sell, cooldown);
  }
}