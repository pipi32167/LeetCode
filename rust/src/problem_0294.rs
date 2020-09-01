use std::iter::FromIterator;

impl Solution {
  fn solve(s: &mut Vec<char>, my_turn: bool) -> bool {
    println!("{}, {:?}", my_turn, String::from_iter(s.iter()));
    
    for i in 0..s.len()-1 {
      if s[i] != '+' || s[i+1] != '+' {
        continue;
      }
      s[i] = '-';
      s[i+1] = '-';
      let ret = Self::solve(s, !my_turn);
      s[i] = '+';
      s[i+1] = '+';
      if my_turn && !ret {
        println!("success: even: {}", my_turn);
        return true;
      }
    }
    false
  }

  pub fn can_win(s: String) -> bool {
    if s.len() < 2 {
      return false;
    }
    Self::solve(&mut s.chars().collect(), true)
  }
}

#[derive(Debug)]
struct Solution {}

#[test]
fn test() {
  let s = "+++".to_owned();
  assert!(!Solution::can_win(s));
  let s = "++".to_owned();
  assert!(Solution::can_win(s));
  let s = "".to_owned();
  assert!(!Solution::can_win(s));
  let s = "++++".to_owned();
  assert!(Solution::can_win(s));
}