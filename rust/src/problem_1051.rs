#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn height_checker(heights: Vec<i32>) -> i32 {
    let mut h = heights.clone();
    h.sort();
    let mut ret = 0;
    for i in 0..h.len() {
      if h[i] != heights[i] {
        ret += 1;
      }
    }
    ret
  }
}
