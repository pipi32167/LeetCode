package main

import (
	"bytes"
	"sort"
)

func isAnagram(s string, t string) bool {

	if len(s) != len(t) {
		return false
	}

	s2 := []byte(s)
	t2 := []byte(t)

	sort.SliceStable(s2, func(i, j int) bool { return s2[i] < s2[j] })
	sort.SliceStable(t2, func(i, j int) bool { return t2[i] < t2[j] })

	return bytes.Compare(s2, t2) == 0
}
