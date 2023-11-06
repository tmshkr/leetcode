class Solution:
    def isHappy(self, n: int) -> bool:
        s = set()
        while n != 1:
            if n in s:
                return False
            s.add(n)
            n = self.getNext(n)
        return True

    def getNext(self, n):
        sum = 0
        while n:
            digit = n % 10
            n = n // 10
            sum += digit ** 2
        return sum

        

# https://leetcode.com/problems/happy-number/
