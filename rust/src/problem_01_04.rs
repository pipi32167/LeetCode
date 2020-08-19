use std::collections::HashMap;

#[derive(Debug)]
struct Solution {
}

impl Solution {
    pub fn can_permute_palindrome(s: String) -> bool {
      
      let mut map = HashMap::new();
      let mut odd = 0;
      let mut even = 0;

      for b in s.as_bytes() {
        let entry = map.entry(b).or_insert(0);
        *entry += 1;
        if *entry == 1 {
          odd += 1;
        } else if *entry % 2 == 0 {
          odd -= 1;
          even += 1;
        } else {
          odd += 1;
          even -= 1;
        }
      }
      odd <= 1
    }
}

#[test]
fn test_can_permute_palindrome() {
  assert!(Solution::can_permute_palindrome("tactcoa".to_string()));
  assert!(!Solution::can_permute_palindrome("abc".to_string()));
}