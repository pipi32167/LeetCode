use std::collections::{HashMap, HashSet};

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn unique_occurrences(arr: Vec<i32>) -> bool {
    let map: HashMap<i32, usize> = arr.iter().fold(HashMap::new(), |mut acc, x| {
      *acc.entry(*x).or_insert(0) += 1;
      acc
    });
    let set: HashSet<&usize> = map.values().collect();
    map.len() == set.len()
  }
}

#[test]
fn test() {
  let arr = vec![1, 2, 2, 1, 1, 3];
  assert!(Solution::unique_occurrences(arr));
  let arr = vec![1, 2];
  assert!(!Solution::unique_occurrences(arr));
  let arr = vec![-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
  assert!(Solution::unique_occurrences(arr));
}
