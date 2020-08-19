use std::collections::HashSet;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
    pub fn is_unique_0(astr: String) -> bool {
      let astr_len = astr.len();
      
      let set: HashSet<&u8> = HashSet::from_iter(astr.as_bytes().iter());

      set.len() == astr_len
    }

    pub fn is_unique(astr: String) -> bool {

      let mut memo: Vec<usize> = vec![0; 26];
      let start = "a".as_bytes()[0];
      for b in astr.as_bytes() {
        let idx = (b - start) as usize;
        if memo[idx] > 0 {
            return false;
        }
        memo[idx] += 1;
      }
      true
    }
}

#[test]
fn test_is_unique() {
  
  assert!(Solution::is_unique("abcde".to_string()));
  assert!(!Solution::is_unique("leetcode".to_string()));
}