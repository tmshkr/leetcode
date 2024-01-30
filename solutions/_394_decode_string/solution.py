class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        res = ""
        k = ""

        for char in s:
            if char.isdigit():
                k += char
            elif char == "[":
                stack.append([k, res])
                k = ""
                res = ""
            elif char == "]":
                prev_k, prev_res = stack.pop()
                res = prev_res + int(prev_k) * res
            else:
                res += char

        return res


# https://leetcode.com/problems/decode-string/
