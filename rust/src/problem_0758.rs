use std::collections::HashSet;
use std::iter::Iterator;

#[derive(Debug)]
struct Solution {}

impl Solution {

  fn is_match(s1: &String, s2: &String, i: usize, j: usize, len: usize) -> bool {
    if s1.len() < i + len || s2.len() < j + len {
      return false;
    }
    let b1: Vec<u8> = s1.bytes().collect();
    let b2: Vec<u8> = s2.bytes().collect();
    for k in 0..len {
      if b1[i + k] != b2[j + k] {
        return false;
      }
    }
    true
  }

  fn index_of_with(s1: &String, s2: &String, offset: usize) -> Option<usize> {
    for i in offset..s1.len() {
      if Self::is_match(s1, s2, i, 0, s2.len()) {
        return Some(i);
      }
    }
    None
  }

  pub fn bold_words(words: Vec<String>, s: String) -> String {
    let mut set = HashSet::new();
    for word in words {
      let mut i = 0;
      while let Some(idx) = Self::index_of_with(&s, &word, i) {
        set.extend(idx..idx + word.len());
        i = idx + 1;
      }
    }

    let mut ret_str = String::new();
    let mut hit = false;
    for (i, c) in s.char_indices() {
      if set.contains(&i) && !hit {
        hit = true;
        ret_str.push_str(&"<b>");
      } else if !set.contains(&i) && hit {
        hit = false;
        ret_str.push_str(&"</b>");
      }
      ret_str.push(c);
    }
    if hit {
      ret_str.push_str(&"</b>");
    }

    ret_str
  }
}

#[test]
fn test() {
  // let ret: Vec<_> = "abababa".match_indices(&"aba").collect();
  // println!("{:?}", ret);
  let words = vec_of_strings!["ab", "bc"];
  let s = "aabcd".to_owned();
  let expect = "a<b>abc</b>d".to_owned();
  let actual = Solution::bold_words(words, s);
  assert_eq!(actual, expect);
}
