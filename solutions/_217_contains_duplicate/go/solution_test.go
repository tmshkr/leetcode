package _217_contains_duplicate

import "testing"


func Test0(t *testing.T) {
    result := containsDuplicate([]int{1, 2, 3, 1})
    expected := true

    if result != expected {
        t.Errorf("containsDuplicate([1,2,3,1]) = %v; want %v", result, expected)
    }
}

func Test1(t *testing.T) {
    result := containsDuplicate([]int{1, 2, 3, 4})
    expected := false

    if result != expected {
        t.Errorf("containsDuplicate([1,2,3,4]) = %v; want %v", result, expected)
    }
}

func Test2(t *testing.T) {
    result := containsDuplicate([]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2})
    expected := true

    if result != expected {
        t.Errorf("containsDuplicate([1,1,1,3,3,4,3,2,4,2]) = %v; want %v", result, expected)
    }
}

