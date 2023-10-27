public class Solution
{
  public bool IsNStraightHand(int[] hand, int groupSize)
  {
    if (hand.Length % groupSize != 0)
    {
      return false;
    }

    Dictionary<int, int> count = new Dictionary<int, int>();
    foreach (int card in hand)
    {
      if (!count.ContainsKey(card))
      {
        count[card] = 0;
      }
      count[card]++;
    }

    List<int> keys = new List<int>(count.Keys);
    keys.Sort();

    foreach (int key in keys)
    {
      int freq = count[key];
      if (freq > 0)
      {
        for (int i = 1; i < groupSize; i++)
        {
          if (!count.ContainsKey(key + i) || count[key + i] < freq)
          {
            return false;
          }
          count[key + i] -= freq;
        }
      }
    }

    return true;
  }
}