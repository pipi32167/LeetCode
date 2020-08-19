#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn valid_word_abbreviation(word: String, abbr: String) -> bool {
    let mut num = 0;
    let mut len = 0;
    for c1 in abbr.chars() {
      if c1.is_lowercase() {
        len += num;
        num = 0;
        let c2 = word.chars().nth(len);
        if c2.is_none() {
          return false;
        } else if c2.unwrap() != c1 {
          return false;
        }
        len += 1;
      } else {
        let digit = c1.to_digit(10).unwrap() as usize;
        if digit == 0 && num == 0 {
          return false;
        }
        num *= 10;
        num += digit;
      }
    }
    len += num;
    word.len() == len
  }
}

#[test]
fn test() {
  assert!(Solution::valid_word_abbreviation(
    "internationalization".to_owned(),
    "i12iz4n".to_owned()
  ));
  assert!(!Solution::valid_word_abbreviation(
    "apple".to_owned(),
    "a2e".to_owned()
  ));
  assert!(!Solution::valid_word_abbreviation(
    "a".to_owned(),
    "01".to_owned()
  ));
  assert!(!Solution::valid_word_abbreviation(
    "word".to_owned(),
    "3e".to_owned()
  ));
  let abbrs = vec_of_strings![
    "word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2",
    "2r1", "3d", "w3", "4"
  ];
  for abbr in abbrs {
    assert!(Solution::valid_word_abbreviation("word".to_owned(), abbr));
  }
}
