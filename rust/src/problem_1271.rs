use std::collections::VecDeque;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn to_hexspeak(num: String) -> String {
    let mut ret = 0u64;
    for c in num.bytes() {
      ret = 10 * ret + (c - b'0') as u64;
    }
    let chars: Vec<char> = "OI23456789ABCDEF".chars().collect();
    let magic_num: Vec<char> = "OIABCDEF".chars().collect();
    let mut ret2: VecDeque<char> = VecDeque::new();
    let mut hit = false;
    while ret > 0 {
      let c = chars[(ret % 16) as usize];
      if !magic_num.contains(&c) {
        hit = true;
      }
      ret2.push_front(c);
      ret /= 16;
    }
    if !hit { 
      String::from_iter(ret2.iter())
    } else {
      "ERROR".to_string()
    }
  }
}

#[test]
fn test() {
  
  assert_eq!(Solution::to_hexspeak("257".to_owned()), "IOI".to_owned());
  assert_eq!(Solution::to_hexspeak("3".to_owned()), "ERROR".to_owned());
  assert_eq!(Solution::to_hexspeak("619879596177".to_owned()), "ERROR".to_owned());
}
