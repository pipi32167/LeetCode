use std::i32;
use std::collections::HashMap;

struct WordDistance {

  dict: HashMap<String, Vec<i32>>
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl WordDistance {


    fn new(words: Vec<String>) -> Self {
      
      let mut dict: HashMap<String, Vec<i32>> = HashMap::new();
      for (i, word) in words.into_iter().enumerate() {
        let entry = dict.entry(word).or_insert(vec![]);
        entry.push(i as i32);
      }
      Self { dict: dict }
    }
    
    fn shortest(&self, word1: String, word2: String) -> i32 {
      
      let is = self.dict.get(&word1).unwrap();
      let js = self.dict.get(&word2).unwrap();
      let mut min_ret = i32::MAX;
      for i in is {
        for j in js {
          min_ret = min_ret.min((i - j).abs());
        }
      }
      min_ret
    }
}


#[test]
fn test() {
  
  let words = vec_of_strings!["practice", "makes", "perfect", "coding", "makes"];
  let word_dist = WordDistance::new(words);
  assert_eq!(word_dist.shortest("coding".to_string(), "practice".to_string()), 3);
  assert_eq!(word_dist.shortest("makes".to_string(), "coding".to_string()), 1);
}