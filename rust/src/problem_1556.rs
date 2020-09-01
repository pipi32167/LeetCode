use std::collections::VecDeque;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn thousand_separator(mut n: i32) -> String {
    if n == 0 {
      return "0".to_string();
    }
    let mut ret: VecDeque<char> = VecDeque::new();
    let nums: Vec<char> = "0123456789".chars().collect();
    let mut i = 0;
    while n > 0 {
      if i > 0 && i % 3 == 0 {
        ret.push_front('.');
      }
      ret.push_front(nums[(n % 10) as usize]);
      n /= 10;
      i += 1;
    }

    String::from_iter(ret.into_iter())
  }
}

#[test]
fn test() {
  assert_eq!(Solution::thousand_separator(987), "987".to_string());
  assert_eq!(Solution::thousand_separator(1234), "1.234".to_string());
  assert_eq!(
    Solution::thousand_separator(123456789),
    "123.456.789".to_string()
  );
  assert_eq!(Solution::thousand_separator(0), "0".to_string());
}
