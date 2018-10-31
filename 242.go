package main

import "sort"

func isAnagram(s string, t string) bool {

	if len(s) != len(t) {
		return false
	}

	return sort.Sort(s) == sort.Sort(t)
}

func main() {
	println(isAnaragram("cat", "tac"))
}
