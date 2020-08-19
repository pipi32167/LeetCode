#[derive(Debug)]
struct Solution {}

impl Solution {
  fn reverse(s: &mut Vec<char>, i: usize, j: usize) {
    let mut i = i;
    let mut j = j;
    while i < j {
      s.swap(i, j);
      i += 1; j -= 1;
    }
  }
  pub fn reverse_words(s: &mut Vec<char>) {
    if s.len() == 0 {
      return;
    }

    s.reverse();
    let mut before_idx = 0;
    for i in 1..s.len() {
      if s[i] == ' ' {
        Self::reverse(s, before_idx, i-1);
        before_idx = i+1;
      }
    }
    Self::reverse(s, before_idx, s.len() - 1);
  }
}


#[test]
fn test() {
  
  let mut s = vec!['t','h','e',' ','s','k','y',' ','i','s',' ','b','l','u','e'];
  let expect = vec!['b','l','u','e',' ','i','s',' ','s','k','y',' ','t','h','e'];
  Solution::reverse_words(&mut s);
  assert_eq!(s, expect);
  let mut s: Vec<char> = vec![];
  let expect: Vec<char> = vec![];
  Solution::reverse_words(&mut s);
  assert_eq!(s, expect);
  let mut s: Vec<char> = vec!['a', 'b', 'c'];
  let expect: Vec<char> = vec!['a', 'b', 'c'];
  Solution::reverse_words(&mut s);
  assert_eq!(s, expect);
  let mut s: Vec<char> = "a".repeat(10000).chars().collect();
  let expect: Vec<char> = "a".repeat(10000).chars().collect();
  Solution::reverse_words(&mut s);
  assert_eq!(s, expect);
}