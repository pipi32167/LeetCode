

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn is_one_edit_distance(mut s: String, mut t: String) -> bool {
    if s.len() < t.len() {
      let tmp = s; s = t; t = tmp;
    }

    if s.len() - t.len() > 1 || s == t {
      return false;
    }

    let scs: Vec<char> = s.chars().collect();
    let tcs: Vec<char> = t.chars().collect();
    let mut diff = 0;

    if s.len() == t.len() {
      
      for i in 0..s.len() { 
        if scs[i] != tcs[i] {
          diff += 1;
          if diff > 1 {
            return false;
          }
        }
      }
    } else {

      let mut i = 0;
      let mut j = s.len() - 1;
      while i < t.len() && scs[i] == tcs[i] {
        i += 1;
      }
      while j as i32 - 1 >= 0 && scs[j] == tcs[j - 1] {
        j -= 1;
      }
      // println!("{}, {}", i, j);
      if i != j && !s.contains(&t) {
        return false;
      }
    }

    true
  }
}

#[test]
fn test() {
  
  let s = "ab";
  let t = "acb";
  assert!(Solution::is_one_edit_distance(s.to_string(), t.to_string()));
  let s = "cab";
  let t = "ad";
  assert!(!Solution::is_one_edit_distance(s.to_string(), t.to_string()));
  let s = "1203";
  let t = "1213";
  assert!(Solution::is_one_edit_distance(s.to_string(), t.to_string()));
  let s = "aa";
  let t = "aaa";
  assert!(Solution::is_one_edit_distance(s.to_string(), t.to_string()));
  let s = "aa";
  let t = "aaaa";
  assert!(!Solution::is_one_edit_distance(s.to_string(), t.to_string()));
  let s = "aa";
  let t = "aab";
  assert!(Solution::is_one_edit_distance(s.to_string(), t.to_string()));
}