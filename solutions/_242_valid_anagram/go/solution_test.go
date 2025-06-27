package _242_valid_anagram

import "testing"


func Test0(t *testing.T) {
    result := isAnagram("anagram","nagaram")
    expected := true

    if result != expected {
        t.Errorf("isAnagram(\"anagram\",\"nagaram\") = %v; want %v", result, expected)
    }
}

func Test1(t *testing.T) {
    result := isAnagram("rat","car")
    expected := false

    if result != expected {
        t.Errorf("isAnagram(\"rat\",\"car\") = %v; want %v", result, expected)
    }
}

