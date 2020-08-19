#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn generate_possible_next_moves(s: String) -> Vec<String> {
    if s.len() < 2 {
      return vec![];
    }
    let mut ret = Vec::new();
    for i in 0..s.len() - 1 {
      if &s[i..i + 2] == "++" {
        ret.push(s[0..i].to_string() + "--" + &s[i + 2..]);
      }
    }
    ret
  }
}

#[test]
fn test() {
  let s = "++++";
  let expect = vec_of_strings!["--++", "+--+", "++--"];
  let actual = Solution::generate_possible_next_moves(s.to_owned());
  assert_eq!(actual, expect);

  let s = "";
  let expect: Vec<String> = vec_of_strings![];
  let actual = Solution::generate_possible_next_moves(s.to_owned());
  assert_eq!(actual, expect);

  let s = "+";
  let expect: Vec<String> = vec_of_strings![];
  let actual = Solution::generate_possible_next_moves(s.to_owned());
  assert_eq!(actual, expect);

  let s = "++";
  let expect: Vec<String> = vec_of_strings!["--"];
  let actual = Solution::generate_possible_next_moves(s.to_owned());
  assert_eq!(actual, expect);
}
