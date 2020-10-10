use std::f32;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn check_straight_line(coordinates: Vec<Vec<i32>>) -> bool {
    let mut before_slope = None;
    for i in 1..coordinates.len() {
      let (p0, p1) = (&coordinates[i - 1], &coordinates[i]);
      let (x0, y0) = (p0[0], p0[1]);
      let (x1, y1) = (p1[0], p1[1]);
      let (x, y) = ((x1 - x0) as f32, (y1 - y0) as f32);
      let slope = if y == 0_f32 { f32::MAX } else { x / y };
      if before_slope.is_some() && before_slope.unwrap() != slope {
        return false;
      }
      before_slope = Some(slope);
    }
    true
  }
}
#[test]
fn test() {
  let coordinates = vec_of_vec![[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
  assert!(Solution::check_straight_line(coordinates));

  let coordinates = vec_of_vec![[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
  assert!(!Solution::check_straight_line(coordinates));
}
