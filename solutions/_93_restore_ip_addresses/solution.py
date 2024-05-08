from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def backtrack(start, path):
            if len(path) == 4:
                if start == len(s):
                    res.append(".".join(path))
                return
            for i in range(1, 4):
                if start + i > len(s):
                    break
                if i > 1 and s[start] == "0":
                    break
                octet = int(s[start : start + i])
                if octet < 256:
                    backtrack(start + i, path + [s[start : start + i]])

        res = []
        backtrack(0, [])
        return res


# https://leetcode.com/problems/restore-ip-addresses/
