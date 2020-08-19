use std::collections::HashMap;
use std::i32;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn shortest_word_distance(words: Vec<String>, word1: String, word2: String) -> i32 {
    let mut dict: HashMap<String, Vec<i32>> = HashMap::new();
    for (i, word) in words.into_iter().enumerate() {
      let entry = dict.entry(word).or_insert(vec![]);
      entry.push(i as i32);
    }
    let is = dict.get(&word1).unwrap();
    let js = dict.get(&word2).unwrap();
    let mut min_ret = i32::MAX;
    for i in is {
      for j in js {
        if i != j {
          min_ret = min_ret.min((i - j).abs());
        }
      }
    }
    min_ret
  }
}

#[test]
fn test() {
  let words = vec_of_strings!["practice", "makes", "perfect", "coding", "makes"];
  assert_eq!(
    Solution::shortest_word_distance(words.clone(), "makes".to_owned(), "coding".to_owned()),
    1
  );
  assert_eq!(
    Solution::shortest_word_distance(words.clone(), "makes".to_owned(), "makes".to_owned()),
    3
  );
}
