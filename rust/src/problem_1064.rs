#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn fixed_point(a: Vec<i32>) -> i32 {
    for i in 0..a.len() {
      if i as i32 == a[i] {
        return a[i];
      }
    }
    -1
  }
}
