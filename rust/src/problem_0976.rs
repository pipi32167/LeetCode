#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn largest_perimeter(mut a: Vec<i32>) -> i32 {
    if a.len() < 3 {
      return 0;
    }
    a.sort();
    for i in (2..a.len()).rev() {
      if a[i] < a[i - 1] + a[i - 2] {
        return a[i] + a[i - 1] + a[i - 2];
      }
    }
    0
  }
}

#[test]
fn test() {
  assert_eq!(Solution::largest_perimeter(vec![2,1,2]), 5);
  assert_eq!(Solution::largest_perimeter(vec![1,2,1]), 0);
  assert_eq!(Solution::largest_perimeter(vec![3,2,3,4]), 10);
  assert_eq!(Solution::largest_perimeter(vec![3,6,2,3]), 8);
}