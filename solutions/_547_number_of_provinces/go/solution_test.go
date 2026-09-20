package _547_number_of_provinces

import "testing"

func Test0(t *testing.T) {
	isConnected := [][]int{{1, 1, 0}, {1, 1, 0}, {0, 0, 1}}
	expected := 2
	actual := findCircleNum(isConnected)
	if actual != expected {
		t.Errorf("findCircleNum(%v) = %v; want %v", isConnected, actual, expected)
	}
}

func Test1(t *testing.T) {
	isConnected := [][]int{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}
	expected := 3
	actual := findCircleNum(isConnected)
	if actual != expected {
		t.Errorf("findCircleNum(%v) = %v; want %v", isConnected, actual, expected)
	}
}
