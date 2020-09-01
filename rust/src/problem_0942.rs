#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn di_string_match(s: String) -> Vec<i32> {
    let mut i = 0;
    let mut j = s.len() as i32;
    let mut ret = vec![];
    for c in s.chars() {
      if c == 'I' {
        ret.push(i);
        i += 1;
      } else {
        ret.push(j);
        j -= 1;
      }
    }
    ret.push(i);
    ret
  }
}

#[test]
fn test() {
    println!("{:?}", Solution::di_string_match("IDID".to_string()));
    println!("{:?}", Solution::di_string_match("III".to_string()));
    println!("{:?}", Solution::di_string_match("DDI".to_string()));

    // Solution::di_string_match("I".repeat(10000));
    // println!("{:?}", Solution::di_string_match("D".repeat(10000)));
}