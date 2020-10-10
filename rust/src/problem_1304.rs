#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn sum_zero(mut n: i32) -> Vec<i32> {
    let mut ret = vec![];
    if n % 2 == 1 {
      ret.push(0);
      n -= 1;
    }
    let mut i = 1;
    while i <= n {
      ret.push(i + 1);
      ret.push(-i - 1);
      i += 2;
    }
    // println!("{:?}", ret);
    ret
  }
}

#[test]
fn test() {
  assert_eq!(Solution::sum_zero(5).iter().sum::<i32>(), 0);
  assert_eq!(Solution::sum_zero(4).iter().sum::<i32>(), 0);
}
