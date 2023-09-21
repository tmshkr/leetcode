from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = [[] for _ in range(numCourses)]
        visited = set()
        visiting = set()

        for crs, pre in prerequisites:
            graph[crs].append(pre)

        def isCyclic(crs):
            if crs in visited:
                return False
            if crs in visiting:
                return True

            visiting.add(crs)
            for pre in graph[crs]:
                if isCyclic(pre):
                    return True

            visiting.remove(crs)
            visited.add(crs)
            return False

        for c in range(numCourses):
            if isCyclic(c):
                return False

        return True


# https://leetcode.com/problems/course-schedule/
