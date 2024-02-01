class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for digit in num:
            while stack and stack[-1] > digit and k > 0:
                k -= 1
                stack.pop()
            if stack or digit != "0":
                stack.append(digit)
        if k:
            stack = stack[:-k]
        return "".join(stack) or "0"


# https://leetcode.com/problems/remove-k-digits/
