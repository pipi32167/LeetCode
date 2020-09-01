#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn last_stone_weight(mut stones: Vec<i32>) -> i32 {
    while stones.len() > 1 {
      stones.sort();
      let a = stones.pop().unwrap();
      let b = stones.pop().unwrap();
      if a != b {
        stones.push(a - b);
      }
    }
    if stones.len() == 0 { 0 } else { stones[0] }
  }
}
