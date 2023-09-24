using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
  public int LadderLength(string beginWord, string endWord, IList<string> wordList)
  {
    // Convert the wordList to a HashSet for faster lookup
    var wordSet = new HashSet<string>(wordList);

    if (!wordSet.Contains(endWord))
      return 0; // The endWord is not in the wordList, so no ladder is possible

    var queue = new Queue<string>();
    queue.Enqueue(beginWord);

    int ladderLength = 1; // Initialize ladder length to 1

    while (queue.Count > 0)
    {
      int levelSize = queue.Count;

      for (int i = 0; i < levelSize; i++)
      {
        var currentWord = queue.Dequeue();

        // Try changing each character of the current word
        for (int j = 0; j < currentWord.Length; j++)
        {
          char[] wordArray = currentWord.ToCharArray();

          for (char c = 'a'; c <= 'z'; c++)
          {
            wordArray[j] = c;
            var transformedWord = new string(wordArray);

            if (wordSet.Contains(transformedWord))
            {
              if (transformedWord == endWord)
                return ladderLength + 1; // Found the endWord, return ladder length

              // Add the transformed word to the queue for further exploration
              queue.Enqueue(transformedWord);
              wordSet.Remove(transformedWord); // Mark it as visited
            }
          }
        }
      }

      ladderLength++; // Increment ladder length after exploring each level
    }

    return 0; // No transformation sequence exists
  }
}
