from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def backtrack(start=0, path=[]):
            if len(path) == 4:
                if start == len(s):
                    res.append(".".join(path))
                return
            for i in range(1, 4):
                if start + i > len(s):
                    break
                if i > 1 and s[start] == "0":
                    break
                octet = s[start : start + i]
                if int(octet) <= 255:
                    path.append(octet)
                    backtrack(start + i, path)
                    path.pop()

        res = []
        backtrack()
        return res


# https://leetcode.com/problems/restore-ip-addresses/
