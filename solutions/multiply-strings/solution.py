class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if "0" in [num1, num2]:
            return "0"
        
        m = len(num1)
        n = len(num2)

        res = [0] * (m + n)

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                p1 = i + j
                p2 = i + j + 1
                sum = int(num1[i]) * int(num2[j]) + res[p2]
                res[p2] = sum % 10
                res[p1] += sum // 10


        while res[0] == 0:
            res.pop(0)
        
        return "".join(str(x) for x in res)


# https://leetcode.com/problems/multiply-strings/
