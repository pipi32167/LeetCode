use std::collections::{HashSet, HashMap};
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

type Memo = HashMap<i32, Vec<String>>;

impl Solution {
  fn zip(first: &Vec<String>, last: &Vec<String>) -> HashSet<String> {
    
    let mut ret = HashSet::new();
    for s1 in first {
      for s2 in last {
        ret.insert(s1.clone() + &s2);
      }
    }
    ret
  }

  pub fn generate(n: i32, memo: &mut Memo) -> Vec<String> {
    if n == 1 {
      return vec!["()".to_string()];
    }

    if memo.contains_key(&n) {
      return memo.get(&n).unwrap().clone();
    }

    let ret = Self::generate(n - 1, memo);
    let mut set: HashSet<String> = HashSet::new();
    for e in ret {
      set.insert("()".to_string() + &e);
      set.insert("(".to_string() + &e + ")");
      set.insert(e + &"()".to_string());
    }
    for i in 1..n-1 {
      let first = Self::generate(i as i32, memo);
      let last = Self::generate((n - i) as i32, memo);
      let zip_ret = Self::zip(&first, &last);
      set.extend(zip_ret.into_iter());
    }
    let ret = Vec::from_iter(set.into_iter());
    memo.insert(n, ret.clone());
    ret
  }

  pub fn generate_parenthesis(n: i32) -> Vec<String> {
    
    let mut memo: Memo = HashMap::new();
    Self::generate(n, &mut memo)
  }
}

#[test]
fn test_generate_parenthesis() {
  let mut expect = vec![
    "((()))".to_string(),
    "(()())".to_string(),
    "(())()".to_string(),
    "()(())".to_string(),
    "()()()".to_string(),
  ];
  expect.sort();
  let mut actual = Solution::generate_parenthesis(3);
  actual.sort();
  assert_eq!(actual, expect);

  let mut expect = vec![
    "(((())))".to_string(),
    "((()()))".to_string(),
    "((())())".to_string(),
    "((()))()".to_string(),
    "(()(()))".to_string(),
    "(()()())".to_string(),
    "(()())()".to_string(),
    "(())(())".to_string(),
    "(())()()".to_string(),
    "()((()))".to_string(),
    "()(()())".to_string(),
    "()(())()".to_string(),
    "()()(())".to_string(),
    "()()()()".to_string(),
  ];
  expect.sort();
  let mut actual = Solution::generate_parenthesis(4);
  actual.sort();
  assert_eq!(actual, expect);

  Solution::generate_parenthesis(10);
  
}
