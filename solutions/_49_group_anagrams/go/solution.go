package _49_group_anagrams

import (
	"sort"
)

func groupAnagrams(strs []string) [][]string {
	anagrams := make(map[string][]string)
	for _, s := range strs {
		sorted := sortString(s)
		anagrams[sorted] = append(anagrams[sorted], s)
	}
	result := make([][]string, 0, len(anagrams))
	for _, v := range anagrams {
		result = append(result, v)
	}
	return result
}

func sortString(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
	return string(runes)
}

/*
https://leetcode.com/problems/group-anagrams/
*/
