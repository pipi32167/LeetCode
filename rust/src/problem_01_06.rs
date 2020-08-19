#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn compress_string(s: String) -> String {
    if s.len() <= 1 {
      return s;
    }
    let mut ret = String::new();
    let mut chars = s.chars();
    let mut before = chars.next().unwrap();
    let mut cnt = 1;
    for c in chars {
      if before != c {
        ret.push(before);
        ret.push_str(&cnt.to_string());
        before = c;
        cnt = 1;
      } else {
        cnt += 1;
      }
    }
    
    ret.push(before);
    ret.push_str(&cnt.to_string());

    if ret.len() < s.len() {
      ret
    } else {
      s
    }
  }
}

#[test]
fn test_compress_string() {

  assert_eq!(Solution::compress_string("aabcccccaaa".to_string()), "a2b1c5a3".to_string());
  assert_eq!(Solution::compress_string("abbccd".to_string()), "abbccd".to_string());
}
