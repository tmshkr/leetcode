from typing import List


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        repeated = set()
        seen = set()

        for i in range(len(s) - 9):
            sub = s[i : i + 10]
            if sub in seen:
                repeated.add(sub)
            seen.add(sub)
        return list(repeated)


# https://leetcode.com/problems/repeated-dna-sequences/
