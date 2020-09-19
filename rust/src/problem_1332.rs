use std::collections::HashSet;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn remove_palindrome_sub(s: String) -> i32 {
    if s.len() == 0 {
      return 0;
    }
    let bytes = s.as_bytes();
    let set: HashSet<&u8> = HashSet::from_iter(bytes);
    let is_palindrome = || {
      let mut i = 0;
      let mut j = bytes.len() - 1;
      while i < j {
        if bytes[i] != bytes[j] {
          return false;
        }
        i += 1;
        j -= 1;
      }
      true
    };
    if is_palindrome() {
      set.len().min(1) as i32
    } else {
      set.len() as i32
    }
  }
}

#[test]
fn test() {
  assert_eq!(Solution::remove_palindrome_sub("bbaabaaa".to_owned()), 2);
  assert_eq!(Solution::remove_palindrome_sub("ababb".to_owned()), 2);
  assert_eq!(Solution::remove_palindrome_sub("ababa".to_owned()), 1);
  assert_eq!(Solution::remove_palindrome_sub("abb".to_owned()), 2);
  assert_eq!(Solution::remove_palindrome_sub("baabb".to_owned()), 2);
}
