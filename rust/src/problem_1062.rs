#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn longest_repeating_substring0(s: String) -> i32 {
    for len in (1..s.len()).rev() {
      for i in 0..=s.len() - len {
        for j in i + 1..=s.len() - len {
          let s1 = &s[i..i + len];
          let s2 = &s[j..j + len];
          if s1 == s2 {
            return len as i32;
          }
        }
      }
    }
    0
  }

  fn is_match(s: &String, len: usize) -> bool {
    for i in 0..=s.len() - len {
      for j in i + 1..=s.len() - len {
        let s1 = &s[i..i + len];
        let s2 = &s[j..j + len];
        if s1 == s2 {
          return true;
        }
      }
    }
    false
  }

  fn solve(s: &String, i: usize, j: usize) -> usize {
    if i > j {
      return 0;
    }
    if i == j {
      return i;
    }

    if i + 1 == j {
      if Self::is_match(s, j) {
        return j;
      } else {
        return i;
      }
    }

    let len = (i + j) / 2;
    if Self::is_match(s, len) {
      Self::solve(s, len, j)
    } else {
      Self::solve(s, i, len - 1)
    }
  }

  pub fn longest_repeating_substring(s: String) -> i32 {

    Self::solve(&s, 0, s.len()) as i32
  }
}

#[test]
fn test() {
  assert_eq!(Solution::longest_repeating_substring("abcd".to_string()), 0);
  assert_eq!(
    Solution::longest_repeating_substring("abbaba".to_string()),
    2
  );
  assert_eq!(
    Solution::longest_repeating_substring("aabcaabdaab".to_string()),
    3
  );
  assert_eq!(
    Solution::longest_repeating_substring("aaaaa".to_string()),
    4
  );
}
