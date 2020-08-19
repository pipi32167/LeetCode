use std::cmp::Ordering;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn is_match(b1: &Vec<u8>, b2: &Vec<u8>, i: usize, j: usize, len: usize) -> bool {
    if i + len > b1.len() || j + len > b2.len()  {
      return false;
    }
    for j in 0..len {
      if b1[i + j] != b2[j] {
        return false;
      }
    }
    true
  }

  fn find_pairs(s: &String, word: &String) -> Vec<Vec<i32>> {
    if word.len() > s.len() {
      return vec![];
    }
    let mut ret = vec![];
    let b1: Vec<u8> = s.bytes().collect();
    let b2: Vec<u8> = word.bytes().collect();
    for i in 0..=s.len() - word.len() {
      if Self::is_match(&b1, &b2, i, 0, word.len()) {
        ret.push(vec![i as i32, (i + word.len() - 1) as i32]);
      }
    }
    ret
  }
  pub fn index_pairs(text: String, words: Vec<String>) -> Vec<Vec<i32>> {
    let mut ret = vec![];
    for word in words {
      ret.extend(Self::find_pairs(&text, &word));
    }
    ret.sort_by(cmp);
    ret
  }
}

fn cmp(a: &Vec<i32>, b: &Vec<i32>) -> Ordering {
  let ret = a[0].cmp(&b[0]);
  if ret != Ordering::Equal {
    ret
  } else {
    a[1].cmp(&b[1])
  }
}

#[test]
fn test() {
  let text = "thestoryofleetcodeandme".to_owned();
  let words = vec_of_strings!["story", "fleet", "leetcode"];
  let expect = vec_of_vec![[3, 7], [9, 13], [10, 17]];
  let actual = Solution::index_pairs(text, words);
  assert_eq!(actual, expect);
  let text = "ababa".to_owned();
  let words = vec_of_strings!["aba", "ab"];
  let expect = vec_of_vec![[0, 1], [0, 2], [2, 3], [2, 4]];
  let actual = Solution::index_pairs(text, words);
  assert_eq!(actual, expect);
  let text = "aabaaaaabb".to_owned();
  let words = vec_of_strings![
    "baaaabbaaa",
    "aaabaabbaaaabaabaa",
    "aaababbbbabbb",
    "baabababbbb",
    "babbaabaaa"
  ];
  let expect: Vec<Vec<i32>> = vec_of_vec![];
  let actual = Solution::index_pairs(text, words);
  assert_eq!(actual, expect);
}
