#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn bitwise_complement(mut num: i32) -> i32 {
    let mut ret = vec![];
    while num > 0 {
      ret.push(num % 2);
      num /= 2;
    }
    if ret.len() == 0 {
      ret.push(0);
    }
    ret.reverse();
    ret
      .iter()
      .fold(0, |acc, x| acc * 2 + if *x == 0 { 1 } else { 0 })
  }
}

#[test]
fn test() {
  assert_eq!(Solution::bitwise_complement(0), 1);
  assert_eq!(Solution::bitwise_complement(5), 2);
  assert_eq!(Solution::bitwise_complement(7), 0);
  assert_eq!(Solution::bitwise_complement(10), 5);
}
