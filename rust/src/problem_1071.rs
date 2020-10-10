use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn gcd_of_strings(str1: String, str2: String) -> String {
    let (s1, s2): (Vec<char>, Vec<char>) = if str1.len() < str2.len() {
      (str1.chars().collect(), str2.chars().collect())
    } else {
      (str2.chars().collect(), str1.chars().collect())
    };
    let slice = |s: &Vec<char>, start: usize, end: usize| -> Vec<char> {
      let mut ret = vec![];
      for i in start..end {
        ret.push(s[i]);
      }
      ret
    };

    let is_repeat = |s: &Vec<char>, sub: &Vec<char>| -> bool {
      let mut i = 0;
      while i < s.len() {
        for j in 0..sub.len() {
          if s[i + j] != sub[j] {
            return false;
          }
        }
        i += (*sub).len();
      }
      true
    };

    for i in 1..=s1.len() {
      if s1.len() % i != 0 {
        continue;
      }
      let len = s1.len() / i;
      if s2.len() % len != 0 {
        continue;
      }
      let sub = slice(&s1, 0, len);
      if is_repeat(&s1, &sub) && is_repeat(&s2, &sub) {
        return String::from_iter(sub);
      }
    }
    "".to_owned()
  }
}

#[test]
fn test() {
  let str1 = "ABCABC".to_owned();
  let str2 = "ABC".to_owned();
  let expect = "ABC".to_owned();
  assert_eq!(Solution::gcd_of_strings(str1, str2), expect);

  let str1 = "ABABAB".to_owned();
  let str2 = "AB".to_owned();
  let expect = "AB".to_owned();
  assert_eq!(Solution::gcd_of_strings(str1, str2), expect);

  let str1 = "LEET".to_owned();
  let str2 = "CODE".to_owned();
  let expect = "".to_owned();
  assert_eq!(Solution::gcd_of_strings(str1, str2), expect);
}