use std::collections::{HashSet, VecDeque};
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

fn slice(chars: &Vec<char>, begin: usize, end: usize) -> String {
  if begin >= end {
    return "".to_string();
  }
  chars.iter().skip(begin).take(end - begin).collect()
}

fn is_any_char_numeric(chars: &Vec<char>, begin: usize, len: usize) -> bool {
  for c in chars.iter().skip(begin).take(len) {
    if c.is_numeric() {
      return true;
    }
  }
  false
}

fn is_surrounded_by_numeric(chars: &Vec<char>, begin: usize, end: usize) -> bool {
  begin > 0 && chars[begin - 1].is_numeric() || end < chars.len() && chars[end].is_numeric()
}

impl Solution {
  fn solve(word: &String, abbr_len: usize) -> Vec<String> {
    if abbr_len == 0 {
      return vec![word.clone()];
    }
    if abbr_len == word.len() {
      return vec![abbr_len.to_string()];
    }

    let mut ret = vec![];
    let chars: Vec<char> = word.chars().collect();
    for i in 0..=word.len() - abbr_len {
      if is_any_char_numeric(&chars, i, i + abbr_len)
        || is_surrounded_by_numeric(&chars, i, i + abbr_len)
      {
        continue;
      }
      let s =
        slice(&chars, 0, i) + &abbr_len.to_string() + &slice(&chars, i + abbr_len, word.len());
      ret.push(s);
    }

    ret
  }
  pub fn generate_abbreviations(word: String) -> Vec<String> {
    if word.len() == 0 {
      return vec![word];
    }
    let mut set = HashSet::new();
    let mut queue: VecDeque<String> = VecDeque::new();
    queue.push_back(word.clone());
    while !queue.is_empty() {
      let s = queue.pop_front().unwrap();
      for i in 1..s.len() {
        let ret = Self::solve(&s, i);
        // println!("{:?}", ret);
        for ret2 in ret {
          if !set.contains(&ret2) {
            set.insert(ret2.clone());
            queue.push_back(ret2);
          }
        }
      }
    }

    set.extend(vec![word.clone(), word.len().to_string()]);
    Vec::from_iter(set.into_iter())
  }
}

#[test]
fn test() {
  let word = "".to_string();
  let expect = vec_of_strings![""];
  let actual = Solution::generate_abbreviations(word);
  assert_eq!(actual, expect);

  let word = "word".to_string();
  let mut expect = vec_of_strings![
    "word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2",
    "2r1", "3d", "w3", "4"
  ];
  let mut actual = Solution::generate_abbreviations(word);
  expect.sort();
  actual.sort();
  assert_eq!(actual, expect);
}
