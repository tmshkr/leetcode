from typing import List


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = [[] for _ in range(numCourses)]
        for crs, pre in prerequisites:
            graph[crs].append(pre)

        res = []
        checking, checked = set(), set()

        def check(crs):
            if crs in checking:
                return False
            if crs in checked:
                return True

            checking.add(crs)
            for pre in graph[crs]:
                if check(pre) == False:
                    return False

            checking.remove(crs)
            checked.add(crs)
            res.append(crs)
            return True

        for c in range(numCourses):
            if check(c) == False:
                return []
        return res


# https://leetcode.com/problems/course-schedule-ii/
