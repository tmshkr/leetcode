from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for a in asteroids:
            top = stack[-1] if stack else 0
            while a < 0 and top > 0:
                sum = a + top
                if sum > 0:
                    # a explodes
                    a = 0
                elif sum < 0:
                    # top explodes
                    stack.pop()
                else:
                    # both explode
                    a = 0
                    stack.pop()
                top = stack[-1] if stack else 0
            if a:
                stack.append(a)

        return stack


# https://leetcode.com/problems/asteroid-collision/
