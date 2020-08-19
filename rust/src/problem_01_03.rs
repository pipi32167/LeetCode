struct Solution {}

impl Solution {
    pub fn replace_spaces(s: String, length: i32) -> String {

      let mut ret = String::new();
      let mut len = 0;
      for b in s.chars() {
        if b == ' ' {
          if len < length {
            ret.push_str("%20");
          }
        } else {
          ret.push(b);
        }
        len += 1;
      }
      ret
    }
}

#[test]
fn test_replace_spaces() {
  assert_eq!(Solution::replace_spaces("Mr John Smith    ".to_string(), 13), "Mr%20John%20Smith".to_string());
  assert_eq!(Solution::replace_spaces("               ".to_string(), 5), "%20%20%20%20%20".to_string());
}