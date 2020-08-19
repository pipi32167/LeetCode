use std::collections::HashSet;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn is_match(s: &String, start: usize, len: usize) -> bool {
    let set: HashSet<char> = s[start..start + len].chars().collect();
    set.len() == len
  }
  pub fn num_k_len_substr_no_repeats0(s: String, k: i32) -> i32 {
    let len = k as usize;
    if len > s.len() {
      return 0;
    }
    let mut cnt = 0;
    for i in 0..=s.len() - len {
      if Self::is_match(&s, i, len) {
        cnt += 1;
      }
    }
    cnt
  }

  pub fn num_k_len_substr_no_repeats(s: String, k: i32) -> i32 {
    let len = k as usize;
    if len > s.len() {
      return 0;
    }
    let mut cnt = 0;
    for i in 0..=s.len() - len {
      if Self::is_match(&s, i, len) {
        cnt += 1;
      }
    }
    cnt
  }
}

#[test]
fn test() {
  assert_eq!(
    Solution::num_k_len_substr_no_repeats("havefunonleetcode".to_owned(), 5),
    6
  );
  assert_eq!(
    Solution::num_k_len_substr_no_repeats("home".to_owned(), 5),
    0
  );

  let s = "a".repeat(10000).to_owned();
  println!("{}", s.len());
  assert_eq!(
    Solution::num_k_len_substr_no_repeats(s, 5),
    0
  );
}
