package _49_group_anagrams

import (
	"reflect"
	"sort"
	"strings"
	"testing"
)

// The order of the groups, and of the strings within each group, is arbitrary,
// so both are sorted before comparing.
func normalize(groups [][]string) [][]string {
	normalized := make([][]string, 0, len(groups))
	for _, group := range groups {
		sortedGroup := append([]string(nil), group...)
		sort.Strings(sortedGroup)
		normalized = append(normalized, sortedGroup)
	}
	sort.Slice(normalized, func(i, j int) bool {
		return strings.Join(normalized[i], ",") < strings.Join(normalized[j], ",")
	})
	return normalized
}

func Test0(t *testing.T) {
	result := groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"})
	expected := [][]string{{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}}

	if !reflect.DeepEqual(normalize(result), normalize(expected)) {
		t.Errorf(`groupAnagrams(["eat","tea","tan","ate","nat","bat"]) = %v; want %v`, result, expected)
	}
}

func Test1(t *testing.T) {
	result := groupAnagrams([]string{""})
	expected := [][]string{{""}}

	if !reflect.DeepEqual(normalize(result), normalize(expected)) {
		t.Errorf(`groupAnagrams([""]) = %v; want %v`, result, expected)
	}
}

func Test2(t *testing.T) {
	result := groupAnagrams([]string{"a"})
	expected := [][]string{{"a"}}

	if !reflect.DeepEqual(normalize(result), normalize(expected)) {
		t.Errorf(`groupAnagrams(["a"]) = %v; want %v`, result, expected)
	}
}
