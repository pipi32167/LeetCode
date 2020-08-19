#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn remove_vowels(s: String) -> String {
    let mut ret = String::new();
    let vowels: Vec<char> = "aeiou".chars().collect();
    for c in s.chars() {
      if !vowels.contains(&c) {
        ret.push(c);
      }
    }
    ret
  }
}

#[test]
fn test() {

  let s = "leetcodeisacommunityforcoders".to_owned();
  let expect = "ltcdscmmntyfrcdrs".to_owned();
  let actual = Solution::remove_vowels(s);
  assert_eq!(actual, expect);
  let s = "aeiou".to_owned();
  let expect = "".to_owned();
  let actual = Solution::remove_vowels(s);
  assert_eq!(actual, expect);
}
