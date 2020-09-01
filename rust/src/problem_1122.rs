use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn relative_sort_array(mut arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
    let mut map: HashMap<i32, i32> = arr2.clone().into_iter().map(|x| (x, 0)).collect();

    arr1.sort();

    for i in &arr1 {
      if map.contains_key(i) {
        *map.entry(*i).or_default() += 1;
      }
    }
    let mut ret = vec![];
    for i in &arr2 {
      let cnt = *map.get(i).unwrap_or(&0);
      if cnt > 0 {
        ret.extend(vec![*i; cnt as usize]);
      }
    }

    for i in &arr1 {
      if !map.contains_key(i) {
        ret.push(*i);
      }
    }
    ret
  }
}

#[test]
fn test() {
  let arr1 = vec![2,3,1,3,2,4,6,7,9,2,19];
  let arr2 = vec![2,1,4,3,9,6];
  let expect = vec![2,2,2,1,4,3,3,9,6,7,19];
  assert_eq!(Solution::relative_sort_array(arr1, arr2), expect);
  
  let arr1 = vec![28,6,22,8,44,17];
  let arr2 = vec![22,28,8,6];
  let expect = vec![22,28,8,6,17,44];
  assert_eq!(Solution::relative_sort_array(arr1, arr2), expect);
}