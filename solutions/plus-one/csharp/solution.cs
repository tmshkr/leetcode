public class Solution
{
  public int[] PlusOne(int[] digits)
  {
    int carry = 1;
    for (int i = digits.Length - 1; i >= 0; i--)
    {
      if (carry == 0)
        break;

      int sum = digits[i] + carry;
      digits[i] = sum % 10;
      carry = sum / 10;
    }

    if (carry == 1)
    {
      int[] result = new int[digits.Length + 1];
      result[0] = 1;
      return result;
    }

    return digits;
  }
}