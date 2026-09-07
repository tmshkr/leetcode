package _1408_string_matching_in_an_array

import (
	"reflect"
	"sort"
	"testing"
)

func Test0(t *testing.T) {
	words := []string{"mass", "as", "hero", "superhero"}
	expected := []string{"as", "hero"}
	result := stringMatching(words)
	actual := append([]string{}, result...)
	sort.Strings(actual)
	sort.Strings(expected)
	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("stringMatching(%v) = %v; want %v", words, result, expected)
	}
}

func Test1(t *testing.T) {
	words := []string{"leetcode", "et", "code"}
	expected := []string{"et", "code"}
	result := stringMatching(words)
	actual := append([]string{}, result...)
	sort.Strings(actual)
	sort.Strings(expected)
	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("stringMatching(%v) = %v; want %v", words, result, expected)
	}
}

func Test2(t *testing.T) {
	words := []string{"blue", "green", "bu"}
	expected := []string{}
	result := stringMatching(words)
	actual := append([]string{}, result...)
	sort.Strings(actual)
	sort.Strings(expected)
	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("stringMatching(%v) = %v; want %v", words, result, expected)
	}
}
