#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn number_of_steps(mut num: i32) -> i32 {
    let mut ret = 0;
    while num > 0 {
      if num % 2 == 0 {
        num /= 2;
      } else {
        num -= 1;
      }
      ret += 1;
    }
    ret
  }
}
