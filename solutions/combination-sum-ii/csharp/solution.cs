public class Solution
{
  public IList<IList<int>> CombinationSum2(int[] candidates, int target)
  {

    var result = new List<IList<int>>();
    Array.Sort(candidates);

    void backtrack(int pos, Stack<int> path, int target)
    {
      if (target == 0)
      {
        result.Add(path.ToList());
      }
      if (target <= 0)
      {
        return;
      }

      var prev = -1;

      for (var i = pos; i < candidates.Length; i++)
      {
        if (candidates[i] == prev)
          continue;

        path.Push(candidates[i]);
        backtrack(i + 1, path, target - candidates[i]);
        path.Pop();
        prev = candidates[i];
      }

    }

    backtrack(0, new Stack<int>(), target);
    return result;
  }
}
