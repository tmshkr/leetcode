from typing import List


class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        students_left = len(students)
        count = [0, 0]
        for pref in students:
            count[pref] += 1

        for sandwich in sandwiches:
            if count[sandwich] == 0:
                break
            students_left -= 1
            count[sandwich] -= 1

        return students_left


# https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
