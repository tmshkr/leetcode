public class Solution
{
  private readonly Dictionary<char, string> map = new Dictionary<char, string>
  {
    {'2', "abc"},
    {'3', "def"},
    {'4', "ghi"},
    {'5', "jkl"},
    {'6', "mno"},
    {'7', "pqrs"},
    {'8', "tuv"},
    {'9', "wxyz"}
  };
  public IList<string> LetterCombinations(string digits)
  {
    var result = new List<string>();

    void backtrack(int i = 0, string cur = "")
    {
      if (cur.Length == digits.Length)
      {
        result.Add(cur);
        return;
      }

      foreach (var c in map[digits[i]])
      {
        backtrack(i + 1, cur + c);
      }
    }

    if (!string.IsNullOrEmpty(digits))
    {
      backtrack();
    }

    return result;
  }
}
