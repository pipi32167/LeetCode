#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_special_integer(arr: Vec<i32>) -> i32 {
    let threshold = (arr.len() + 3) / 4;
    let mut before = arr[0];
    let mut cnt = 1;
    for i in 1..arr.len() {
      if before != arr[i] {
        cnt = 1;
        before = arr[i];
      } else {
        cnt += 1;
        if cnt > threshold {
          return arr[i];
        }
      }
    }
    before
  }
}

#[test]
fn test() {
  let arr = vec![1, 2, 2, 6, 6, 6, 6, 7, 10];
  assert_eq!(Solution::find_special_integer(arr), 6);
  let arr = vec![1];
  assert_eq!(Solution::find_special_integer(arr), 1);
}
