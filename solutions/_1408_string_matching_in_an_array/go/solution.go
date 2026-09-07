package _1408_string_matching_in_an_array

import "strings"

func stringMatching(words []string) []string {
	result := []string{}
	for i, word := range words {
		for j, other := range words {
			if i != j && strings.Contains(other, word) {
				result = append(result, word)
				break
			}
		}
	}
	return result
}

/*
https://leetcode.com/problems/string-matching-in-an-array/
*/
