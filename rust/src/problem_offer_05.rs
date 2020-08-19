#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn replace_space(s: String) -> String {
    String::from(str::replace(s.as_str(), " ", "%20"))
  }
}

#[test]
fn test_replace_space() {
    
  assert_eq!(Solution::replace_space(String::from("We are happy.")), String::from("We%20are%20happy."));
}