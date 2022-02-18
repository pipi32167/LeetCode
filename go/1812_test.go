package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSquareIsWhite(t *testing.T) {
	assert.False(t, squareIsWhite("a1"))
	assert.True(t, squareIsWhite("h3"))
	assert.False(t, squareIsWhite("c7"))
}
