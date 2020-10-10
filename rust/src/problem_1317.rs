#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn get_no_zero_integers(n: i32) -> Vec<i32> {
    let has_zero = |x: i32| x.to_string().contains('0');

    for i in 1..n {
      if !has_zero(i) && !has_zero(n - i) {
        return vec![i, n - i];
      }
    }
    vec![-1, -1]
  }
}

#[test]
fn test() {
  assert_eq!(Solution::get_no_zero_integers(2), vec![1, 1]);
  assert_eq!(Solution::get_no_zero_integers(11), vec![2, 9]);
  assert_eq!(Solution::get_no_zero_integers(10000), vec![1, 9999]);
  assert_eq!(Solution::get_no_zero_integers(69), vec![1, 68]);
  assert_eq!(Solution::get_no_zero_integers(1010), vec![11, 999]);
}
