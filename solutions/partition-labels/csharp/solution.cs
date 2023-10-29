public class Solution
{
  public IList<int> PartitionLabels(string s)
  {
    int[] last = new int[26];
    for (int i = 0; i < s.Length; i++)
    {
      last[s[i] - 'a'] = i;
    }
    IList<int> result = new List<int>();
    int start = 0, end = 0;
    for (int i = 0; i < s.Length; i++)
    {
      end = Math.Max(end, last[s[i] - 'a']);
      if (i == end)
      {
        result.Add(end - start + 1);
        start = end + 1;
      }
    }
    return result;
  }

}

