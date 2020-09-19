use std::collections::{HashMap, HashSet};
use std::i32;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn array_rank_transform(arr: Vec<i32>) -> Vec<i32> {
    let set: HashSet<i32> = HashSet::from_iter(arr.clone().into_iter());
    let mut arr2 = Vec::from_iter(set);
    arr2.sort();
    // println!("{:?}", arr2);
    let map: HashMap<i32, i32> = arr2
      .into_iter()
      .enumerate()
      .map(|(i, v)| (v, i as i32 + 1))
      .collect();
    // println!("{:?}", map);
    arr.into_iter().map(|x| *map.get(&x).unwrap()).collect()
  }
}

#[test]
fn test() {
  let arr = vec![40, 10, 20, 30];
  let expect = vec![4, 1, 2, 3];
  assert_eq!(Solution::array_rank_transform(arr), expect);

  let arr = vec![100, 100, 100];
  let expect = vec![1, 1, 1];
  assert_eq!(Solution::array_rank_transform(arr), expect);

  let arr = vec![37, 12, 28, 9, 100, 56, 80, 5, 12];
  let expect = vec![5, 3, 4, 2, 8, 6, 7, 1, 3];
  assert_eq!(Solution::array_rank_transform(arr), expect);
}
