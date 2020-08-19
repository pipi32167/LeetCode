#[derive(Debug)]
struct Solution {}

impl Solution {
  fn make_abbr(word: &String, prefix: usize) -> String {
    if word.len() <= 2 + prefix {
      return word.clone();
    }
    let chars: Vec<char> = word.chars().collect();
    let ret = word[0..prefix].to_string()
      + &(chars.len() - (prefix + 1)).to_string()
      + &word[word.len() - 1..];
    ret
  }
  fn index_of(strs: &Vec<String>, sub: &String) -> Option<usize> {
    let ret = strs.iter().position(|x| x == sub);
    // println!("index_of({:?}, {}) = {:?}", strs, sub, ret);
    ret
  }
  pub fn words_abbreviation(dict: Vec<String>) -> Vec<String> {
    let mut ret = dict.clone();
    let mut done = vec![false; dict.len()];
    let mut prefix = 1;
    let mut hit = true;
    while hit {
      hit = false;
      let mut revert_indices = vec![];
      for (i, word) in dict.iter().enumerate() {
        if done[i] {
          continue;
        }
        let abbr = Self::make_abbr(word, prefix);
        if abbr.len() == word.len() {
          done[i] = true;
          continue;
        }
        if let Some(idx) = Self::index_of(&ret, &abbr) {
          revert_indices.push(idx);
          hit = true
        } else {
          done[i] = true;
          ret[i] = abbr;
        }
      }
      for idx in revert_indices {
        done[idx] = false;
        ret[idx] = dict[idx].clone();
      }
      prefix += 1;
    }
    ret
  }
}

#[test]
fn test() {
  let dict = vec_of_strings![
    "like",
    "god",
    "internal",
    "me",
    "internet",
    "interval",
    "intension",
    "face",
    "intrusion"
  ];
  let expect =
    vec_of_strings!["l2e", "god", "internal", "me", "i6t", "interval", "inte4n", "f2e", "intr4n"];
  let actual = Solution::words_abbreviation(dict);
  // println!("{:?}", actual);
  assert_eq!(actual, expect);
  let dict = vec_of_strings!["abcdefg", "abccefg", "abcckkg"];
  let expect = vec_of_strings!["abcd2g", "abccefg", "abcckkg"];
  let actual = Solution::words_abbreviation(dict);
  // println!("{:?}", actual);
  assert_eq!(actual, expect);
}
