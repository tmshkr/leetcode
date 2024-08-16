package _1700_number_of_students_unable_to_eat_lunch;

class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int studentsRemaining = students.length;
        int[] count = new int[2];
        for (int pref : students) {
            count[pref]++;
        }

        for (int sandwich : sandwiches) {
            if (count[sandwich] == 0) {
                break;
            }
            count[sandwich]--;
            studentsRemaining--;
        }
        return studentsRemaining;
    }
}

/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */