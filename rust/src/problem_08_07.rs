use std::collections::{HashSet};
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

// static mut CNT: usize = 0;

impl Solution {

  fn solve(s: &String, n: usize) -> HashSet<String> {
    
    let mut ret = HashSet::new();
    if n == 0 {
      // println!("{}, {}", n, String::from(&s[0..1]));
      ret.insert(String::from(&s[0..1]));
      return ret;
    }

    let s0 = &s[n..n+1];
    let before_ret = Self::solve(s, n - 1);
    for s1 in before_ret {
      for i in 0..=s1.len() {
        // println!("i:{}, n:{}, s:{}", i, n, String::from(&s1[0..i]) + s0 + &s1[i..s1.len()]);
        ret.insert(String::from(&s1[0..i]) + s0 + &s1[i..s1.len()]);
        // unsafe {
        //   CNT += 1;
        // }
      }
    }
    ret
  }
  
  pub fn permutation(s: String) -> Vec<String> {
    
    let n = s.len() - 1;
    Vec::from_iter(Self::solve(&s, n))
  }
}

#[test]
fn test_permutation() {
  let s = "qwe".to_string();
  let mut expect = vec![
    "qwe".to_string(),
    "qew".to_string(),
    "wqe".to_string(),
    "weq".to_string(),
    "ewq".to_string(),
    "eqw".to_string(),
  ];
  let mut actual = Solution::permutation(s);
  expect.sort();
  actual.sort();
  assert_eq!(actual, expect);

  let s = "123456789".to_string();
  Solution::permutation(s);

  // unsafe {
  //   println!("CNT: {}", CNT);
  // }
}
