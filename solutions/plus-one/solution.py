from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        i = len(digits) - 1

        while carry and i >= 0:
            sum = digits[i] + carry
            digits[i] = sum % 10
            carry = sum // 10
            i -= 1

        if carry:
            digits.insert(0, carry)

        return digits

        

# https://leetcode.com/problems/plus-one/
