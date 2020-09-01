use std::collections::HashMap;
use std::{i32, i64};

#[derive(Debug)]
struct Solution {}

fn calc(v: &mut Vec<i32>) -> i64 {
  v.sort();
  v.iter().fold(0, |acc, x| acc * 10 + *x as i64)
}

impl Solution {

  fn solve(a: i32, memo: &mut HashMap<i32, (Vec<i32>, i64)>) -> (Vec<i32>, i64) {
    
    if let Some(v) = memo.get(&a) {
      return v.clone();
    }
    // println!("{}", a);
    let u = (a as f32).sqrt() as i32;
    let mut min = i32::MAX as i64;
    let mut min_ret = vec![];
    for i in (2..=u).rev() {
      if i >= 10 {
        continue;
      }
      if a % i != 0 {
        continue;
      }
      let (mut ret1, _) = Self::solve(a / i, memo);
      if ret1.len() == 0 {
        continue;
      }
      ret1.push(i);
      let ret = calc(&mut ret1);
      if min > ret {
        min = ret;
        min_ret = ret1;
        // println!("hit1: {}, {}, {:?}", a, min, min_ret);
      }
    } 

    if a < 10 && min > a as i64 {
      min = a as i64;
      min_ret = vec![a];
      // println!("hit2: {}, {}, {:?}", a, min, min_ret);
    }

    let ret = (min_ret, min);
    memo.insert(a, ret.clone());
    ret
  }

  pub fn smallest_factorization(a: i32) -> i32 {
    // println!("smallest_factorization");
    let mut memo: HashMap<i32, (Vec<i32>, i64)> = HashMap::new();
    let (_v, ret) = Self::solve(a, &mut memo);
    // println!("{:?}", memo);
    if ret >= i32::MAX as i64 { 0 } else { ret as i32 } 
  }
}

#[test]
fn test() {
  
  assert_eq!(Solution::smallest_factorization(22), 0);
  assert_eq!(Solution::smallest_factorization(18000000), 0);
  assert_eq!(Solution::smallest_factorization(3000000), 355555588);
  assert_eq!(Solution::smallest_factorization(2), 2);
  assert_eq!(Solution::smallest_factorization(1024), 2888);
  assert_eq!(Solution::smallest_factorization(48), 68);
  assert_eq!(Solution::smallest_factorization(15), 35);
  assert_eq!(Solution::smallest_factorization(11), 0);
}