#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn prefixes_div_by5(a: Vec<i32>) -> Vec<bool> {
    let mut ret = vec![];
    let mut num = 0;
    for i in a {
      num <<= 1;
      num += i;
      num %= 5;
      ret.push(num == 0);
    }
    ret
  }
}

#[test]
fn test() {
  let a = vec![0, 1, 1];
  let expect = vec![true, false, false];
  assert_eq!(Solution::prefixes_div_by5(a), expect);

  let a = vec![1, 1, 1];
  let expect = vec![false, false, false];
  assert_eq!(Solution::prefixes_div_by5(a), expect);

  let a = vec![0, 1, 1, 1, 1, 1];
  let expect = vec![true, false, false, false, true, false];
  assert_eq!(Solution::prefixes_div_by5(a), expect);

  let a = vec![1, 1, 1, 0, 1];
  let expect = vec![false, false, false, false, false];
  assert_eq!(Solution::prefixes_div_by5(a), expect);

  let a = vec![
    1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 0, 0, 1,
  ];
  let expect = vec![
    false, false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, true, false, false, true, true, true, true, false,
  ];
  assert_eq!(Solution::prefixes_div_by5(a), expect);
}
