#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn duplicate_zeros(arr: &mut Vec<i32>) {
    let mut arr2 = vec![];
    for i in 0..arr.len() {
      arr2.push(arr[i]);
      if arr[i] == 0 {
        arr2.push(0);
      }
      if arr2.len() >= arr.len() {
        break;
      }
    }
    for i in 0..arr.len() {
      arr[i] = arr2[i];
    }
  }

}

#[test]
fn test() {
  let mut arr = vec![1, 0, 2, 3, 0, 4, 5, 0];
  let expect = vec![1, 0, 0, 2, 3, 0, 0, 4];
  Solution::duplicate_zeros(&mut arr);
  assert_eq!(arr, expect);
  let mut arr = vec![1, 2, 3];
  let expect = vec![1, 2, 3];
  Solution::duplicate_zeros(&mut arr);
  assert_eq!(arr, expect);
}
