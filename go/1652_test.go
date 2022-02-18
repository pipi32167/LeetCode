package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestDecrypt(t *testing.T) {

	code := []int{5, 7, 1, 4}
	k := 3
	res := []int{12, 10, 16, 13}

	assert.Equal(t, res, decrypt(code, k))
}
