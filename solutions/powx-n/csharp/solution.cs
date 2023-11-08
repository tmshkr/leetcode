public class Solution
{
  public double MyPow(double x, long n)
  {
    return double.Parse(Math.Pow(x, n).ToString("0.00000"));
  }
}