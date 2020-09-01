#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn valid_word_square(words: Vec<String>) -> bool {
    let words: Vec<Vec<char>> = words.iter().map(|x| x.chars().collect()).collect();
    let max_len = words.iter().map(|x| x.len()).max().unwrap();
    let mut words2 = vec![vec![]; max_len];
    for i in 0..words.len() {
      for j in 0..words[i].len() {
        words2[j].push(words[i][j]);
      }
    }
    if words.len() != words2.len() {
      return false;
    }
    for i in 0..words.len() {
      if words[i].len() != words2[i].len() {
        return false;
      }
      for j in 0..words[i].len() {
        if words[i][j] != words2[i][j] {
          return false;
        }
      }
    }
    true
  }
}

#[test]
fn test() {
  let words = vec_of_strings!["abcd", "bnrt", "crmy", "dtye"];
  assert!(Solution::valid_word_square(words));

  let words = vec_of_strings!["abcd", "bnrt", "crm", "dt"];
  assert!(Solution::valid_word_square(words));

  let words = vec_of_strings!["ball", "area", "read", "lady"];
  assert!(!Solution::valid_word_square(words));
  let words = vec_of_strings!["ball", "asee", "let", "lep"];
  assert!(!Solution::valid_word_square(words));

  let words = vec_of_strings!["ball", "asee", "lett", "le"];
  assert!(!Solution::valid_word_square(words));

  let words = vec_of_strings!["abc", "b"];
  assert!(!Solution::valid_word_square(words));
}
