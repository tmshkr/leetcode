package _217_contains_duplicate

func containsDuplicate(nums []int) bool {
    seen := make(map[int]bool)
    for _, num := range nums {
        if seen[num] {
            return true
        }
        seen[num] = true
    }
    return false
}
  
/*
https://leetcode.com/problems/contains-duplicate/
*/
