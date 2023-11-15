public class Solution
{
  public int MissingNumber(int[] nums)
  {
    int n = nums.Length;
    int x = n;
    for (int i = 0; i < n; i++)
    {
      x ^= i ^ nums[i];
    }
    return x;
  }
}

