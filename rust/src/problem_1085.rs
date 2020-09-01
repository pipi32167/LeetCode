#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn sum_of_digits(a: Vec<i32>) -> i32 {
    let mut min = *a.iter().min().unwrap();
    let mut ret = 0;
    while min > 0 {
      ret += min % 10;
      min /= 10;
    }
    if ret % 2 == 0 { 1 } else { 0 }
  }
}