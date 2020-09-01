use std::collections::{VecDeque, HashMap};

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn confusing_number(mut n: i32) -> bool {
    let origin_nums = [0, 1, 6, 8, 9];
    let rotate_nums = [0, 1, 9, 8, 6];
    let map: HashMap<i32, i32> = origin_nums
      .iter()
      .enumerate()
      .map(|(i, x)| (*x, rotate_nums[i]))
      .collect();
    let mut origin_nums = vec![];
    let mut rotate_nums = VecDeque::new();
    while n > 0 {
      let ret = n % 10;
      if !map.contains_key(&ret) {
        return false;
      }
      origin_nums.push(ret);
      rotate_nums.push_front(map[&ret]);
      n /= 10;
    }
    // println!("{:?}, {:?}", origin_nums, rotate_nums);

    for i in 0..origin_nums.len() {
      if origin_nums[i] != rotate_nums[i] {
        return true;
      }
    }

    false
  }
}


#[test]
fn test() {
  assert!(Solution::confusing_number(6));
  assert!(Solution::confusing_number(89));
  assert!(!Solution::confusing_number(69));
  assert!(!Solution::confusing_number(11));
  assert!(!Solution::confusing_number(25));
}