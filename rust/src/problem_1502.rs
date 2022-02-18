#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn can_make_arithmetic_progression(mut arr: Vec<i32>) -> bool {
    arr.sort();
    if arr.len() <= 2 {
      return true;
    }
    let diff = arr[1] - arr[0];
    for i in 2..arr.len() {
      if arr[i] - arr[i - 1] != diff {
        return false;
      }
    }
    true
  }
}

#[test]
fn test() {
  let arr = vec![3, 5, 1];
  assert!(Solution::can_make_arithmetic_progression(arr));
  let arr = vec![1, 2, 4];
  assert!(!Solution::can_make_arithmetic_progression(arr));
}
