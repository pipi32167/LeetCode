package main

func squareIsWhite(coordinates string) bool {

	i := coordinates[0] - 'a'
	j := coordinates[1] - '1'
	return (i+j)%2 == 1
}
