class FreqStack:

    def __init__(self):
        self.stack = []
        self.freq = {}

    def push(self, val: int) -> None:
        if val in self.freq:
            self.freq[val] += 1
        else:
            self.freq[val] = 1

        if self.freq[val] > len(self.stack):
            self.stack.append([val])
        else:
            self.stack[self.freq[val] - 1].append(val)

    def pop(self) -> int:
        val = self.stack[-1].pop()
        if not self.stack[-1]:
            self.stack.pop()
        self.freq[val] -= 1
        return val


# https://leetcode.com/problems/maximum-frequency-stack/
