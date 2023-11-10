using System;
using System.Text;

public class Solution
{
  public string Multiply(string num1, string num2)
  {
    if (string.Equals(num1, "0") || string.Equals(num2, "0"))
      return "0";

    int m = num1.Length;
    int n = num2.Length;
    int[] res = new int[m + n];

    for (int i = m - 1; i >= 0; i--)
    {
      for (int j = n - 1; j >= 0; j--)
      {
        int p1 = i + j;
        int p2 = i + j + 1;
        int sum = res[p2] + (num1[i] - '0') * (num2[j] - '0');
        res[p2] = sum % 10;
        res[p1] += (int)Math.Floor(sum / 10.0);
      }
    }

    int start = 0;
    while (res[start] == 0)
    {
      start++;
    }

    if (start > 0)
    {
      var temp = new int[res.Length - start];
      Array.Copy(res, start, temp, 0, temp.Length);
      res = temp;
    }

    var str = new StringBuilder();
    for (var i = 0; i < res.Length; i++)
    {
      str.Append(res[i]);
    }

    return str.ToString();
  }
}