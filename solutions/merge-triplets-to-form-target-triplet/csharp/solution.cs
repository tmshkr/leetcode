public class Solution
{
  public bool MergeTriplets(int[][] triplets, int[] target)
  {
    int[] res = new int[3];
    foreach (int[] triplet in triplets)
    {
      if (triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2])
      {
        res[0] = Math.Max(res[0], triplet[0]);
        res[1] = Math.Max(res[1], triplet[1]);
        res[2] = Math.Max(res[2], triplet[2]);
      }
    }
    return res.SequenceEqual(target);
  }

}

