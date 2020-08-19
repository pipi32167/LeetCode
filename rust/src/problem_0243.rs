
#[derive(Debug)]
struct Solution {}

impl Solution {
  fn positions_of(words: &Vec<String>, word: String) -> Vec<usize> {
    words
    .iter()
    .enumerate()
    .filter_map(|e| if *e.1 == word { Some(e) } else { None })
    .map(|e| e.0)
    .collect()
  }
  pub fn shortest_distance(words: Vec<String>, word1: String, word2: String) -> i32 {
    let is = Self::positions_of(&words, word1);
    let js = Self::positions_of(&words, word2);
    // println!("{:?}, {:?}", is, js);
    let mut min = words.len() as i32 + 1;
    for i in is {
      for j in &js {
        min = (i as i32 - *j as i32).abs().min(min);
      }
    }
    min
  }
}


#[test]
fn test_shortest_distance() {
  let words = vec_of_strings!["practice", "makes", "perfect", "coding", "makes"];
  let word1 = "coding".to_string();
  let word2 = "practice".to_string();
  assert_eq!(Solution::shortest_distance(words, word1, word2), 3);

  let words = vec_of_strings!["practice", "makes", "perfect", "coding", "makes"];
  let word1 = "makes".to_string();
  let word2 = "coding".to_string();
  assert_eq!(Solution::shortest_distance(words, word1, word2), 1);
}
