use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn can_permute_palindrome(s: String) -> bool {

    let mut ret = HashMap::new();
    for c in s.chars() {
      let entry = ret.entry(c).or_insert(0);
      *entry += 1;
    }

    let mut odd = 0;
    for entry in ret {
      if entry.1 % 2 == 1 {
        odd += 1;
        if odd > 1 {
          return false;
        }
      }
    }
    true
  }
}

#[test]
fn test_can_permute_palindrome() {
  assert!(!Solution::can_permute_palindrome("code".to_string()));
  assert!(Solution::can_permute_palindrome("aab".to_string()));
  assert!(Solution::can_permute_palindrome("carerac".to_string()));
}