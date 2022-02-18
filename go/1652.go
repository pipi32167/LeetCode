package main

func sum(code []int, i, j int) int {
	sum := 0
	d := j - i
	i %= len(code)
	if i < 0 {
		i += len(code)
	}
	j = i + d
	for ; i <= j; i++ {
		sum += code[i%len(code)]
	}
	return sum
}

func decrypt(code []int, k int) []int {

	res := []int{}
	for i := 0; i < len(code); i++ {
		if k > 0 {
			res = append(res, sum(code, i+1, i+k))
		} else {
			res = append(res, sum(code, i+k, i-1))
		}
	}
	return res
}
