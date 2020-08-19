use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn check_permutation_0(s1: String, s2: String) -> bool {
    let mut char_cnt: Vec<usize> = vec![0; 26];
    let start = "a".as_bytes()[0];

    for b in s1.as_bytes() {
      let idx = (b - start) as usize;
      char_cnt[idx] += 1;
    }

    for b in s2.as_bytes() {
      let idx = (b - start) as usize;
      if char_cnt[idx] == 0 {
        return false;
      }
      char_cnt[idx] -= 1;
    }

    true
  }

  pub fn check_permutation(s1: String, s2: String) -> bool {
    
    let mut char_cnt = HashMap::new();

    for b in s1.as_bytes() {
      let entry = char_cnt.entry(*b).or_insert(0);
      *entry += 1;
    }

    for b in s2.as_bytes() {
      let entry = char_cnt.entry(*b).or_insert(0);
      if *entry == 0 {
        return false;
      }
      *entry -= 1;
    }
    true
  }
}

#[test]
fn test_check_permutation() {
  assert!(Solution::check_permutation(
    "abc".to_string(),
    "bca".to_string()
  ));
  assert!(!Solution::check_permutation(
    "abc".to_string(),
    "bad".to_string()
  ));
}
