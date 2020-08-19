#[derive(Debug)]
struct Solution {}

impl Solution {
  #[inline]
  fn is_match(s1: &String, s2: &String, i: usize) -> bool {
    println!("{}", i);
    let s1 = s1.as_bytes();
    let s2 = s2.as_bytes();
    for j in i..s2.len() {
      if s1[j - i] != s2[j] {
        // println!("i1: {}, j1: {}, a:{}, b:{}", j - i, i, s1[j - i], s2[j]);
        return false;
      }
    }
    let s1_start = s1.len() - i;
    for j in 0..i {
      if s1[s1_start + j] != s2[j] {
        // println!("i2: {}, j2: {}, a:{}, b:{}", s1_start + j, j, s1[s1_start + j], s2[j]);
        return false;
      }
    }
    true
  }

  pub fn is_fliped_string(s1: String, s2: String) -> bool {
    if s1.len() != s2.len() {
      return false;
    }
    if s1.len() == 0 {
      return true;
    }

    let mut i = 0;
    while i < s2.len() {
      if Self::is_match(&s1, &s2, i) {
        return true;
      }
      i += 1;
    }
    false
  }
}

#[test]
fn test_is_fliped_string() {
  let s1 = "waterbottle";
  let s2 = "erbottlewat";
  assert!(Solution::is_fliped_string(s1.to_string(), s2.to_string()));
  let s1 = "";
  let s2 = "";
  assert!(Solution::is_fliped_string(s1.to_string(), s2.to_string()));
  let s1 = "aa";
  let s2 = "aba";
  assert!(!Solution::is_fliped_string(s1.to_string(), s2.to_string()));
  let s1 = "a".repeat(30000) + &"b".repeat(40000) + &"a".repeat(30000);
  let s2 = "a".repeat(30000) + &"a".repeat(30000) + &"b".repeat(40000);
  assert!(Solution::is_fliped_string(s1.to_string(), s2.to_string()));
}
