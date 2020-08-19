#[derive(Debug)]
struct Solution {}
impl Solution {
  pub fn multiply(a: i32, b: i32) -> i32 {
    match b {
      0 => 0,
      1 => a,
      b => {
        let mut shift = 0;
        while (1 << (shift + 1)) < b {
          shift += 1;
        }

        (a << shift) + Self::multiply(a, b - (1 << shift))
      }
    }
  }
}
#[test]
fn test_multiply() {
  assert_eq!(Solution::multiply(1, 10), 10);
  assert_eq!(Solution::multiply(3, 4), 12);
  assert_eq!(Solution::multiply(19, 57), 19 * 57);
}
