class Solution:
    def isPathCrossing(self, path: str) -> bool:
        visited = set()
        x, y = 0, 0
        visited.add((x, y))
        for step in path:
            if step == "N":
                y += 1
            elif step == "S":
                y -= 1
            elif step == "E":
                x += 1
            elif step == "W":
                x -= 1
            if (x, y) in visited:
                return True
            visited.add((x, y))

        return False


# https://leetcode.com/problems/path-crossing/
