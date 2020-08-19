use std::collections::{HashMap, HashSet};
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

fn slice(s: &Vec<char>, begin: usize, end: usize) -> Vec<char> {
  s.clone().into_iter().skip(begin).take(end - begin).collect()
}

impl Solution {

  fn solve(chars: Vec<char>, memo: &mut HashMap<Vec<char>, HashSet<Vec<char>>>) -> HashSet<Vec<char>> {

    // println!("{:?}, {:?}", chars, memo.len());
    if chars.len() == 1 {
      return HashSet::from_iter(vec![chars.clone()]);
    }
    
    if let Some(v) = memo.get(&chars) {
      // println!("hit: {:?}, {:?}", chars, v);
      return v.clone();
    }
    
    let mut rets = HashSet::new();
    let handled_chars: HashSet<char> = HashSet::new();
    for (i, &c) in chars.iter().enumerate() {
      if handled_chars.contains(&c) {
        continue;
      }
      let mut chars2 = slice(&chars, 0, i);
      chars2.extend(slice(&chars, i+1, chars.len()));
      
      for cs in Self::solve(chars2, memo) {
        let mut ret = vec![c];
        ret.extend(cs);
        rets.insert(ret);
      }
    }

    // println!("miss: {:?}, {:?}", chars, rets);
    memo.insert(chars, rets.clone());
    rets
  }

  pub fn generate_palindromes(s: String) -> Vec<String> {
    if s.len() == 0 {
      return vec![];
    }
    if s.len() == 1 {
      return vec![s];
    }
    let mut char_cnt: HashMap<char, usize> = HashMap::new();
    let mut odd = 0;
    for c in s.chars() {
      let entry = char_cnt.entry(c).or_insert(0);
      *entry += 1;
      if *entry % 2 != 0 {
        odd += 1
      } else {
        odd -= 1
      }
    }
    if odd > 1 {
      return vec![];
    }

    let mut chars = vec![];
    let mut last_char: Option<char> = None;
    for (c, cnt) in char_cnt {
      if cnt >= 2 {
        chars.extend(vec![c; cnt/2]);
      }
      if cnt % 2 == 1 {
        last_char = Some(c);
      }
    }
    chars.sort();
    // println!("{:?}, {:?}", chars, last_char);
    let mut memo: HashMap<Vec<char>, HashSet<Vec<char>>> = HashMap::new();
    let rets = Self::solve(chars, &mut memo);
    // println!("{:?}", rets);
    rets
      .into_iter()
      .map(|x| {
        let mut x2 = x.clone();
        x2.reverse();
        if let Some(c) = last_char {
          format!("{}{}{}", String::from_iter(x), c, String::from_iter(x2))
        } else {
          format!("{}{}", String::from_iter(x), String::from_iter(x2))
        }
      })
      .collect()
  }
}


#[test]
fn test() {
  let s = "a".to_owned();
  let expect = vec_of_strings!["a"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aaaaaa".to_owned();
  let expect = vec_of_strings!["aaaaaa"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".to_owned();
  let expect = vec_of_strings!["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaab".to_owned();
  let expect = vec_of_strings!["aaaaaaaaaaaaaaabaaaaaaaaaaaaaaa"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aaa".to_owned();
  let expect = vec_of_strings!["aaa"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aaabb".to_owned();
  let expect = vec_of_strings!["ababa", "baaab"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aabb".to_owned();
  let expect = vec_of_strings!["abba", "baab"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "aab".to_owned();
  let expect = vec_of_strings!["aba"];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
  let s = "abc".to_owned();
  let expect: Vec<String> = vec![];
  let mut actual = Solution::generate_palindromes(s);
  actual.sort();
  assert_eq!(actual, expect);
}
