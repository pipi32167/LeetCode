use std::collections::HashMap;

struct WordsFrequency {
  map: HashMap<String, i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl WordsFrequency {
  fn new(book: Vec<String>) -> Self {
    let mut wf = WordsFrequency {
      map: HashMap::new(),
    };

    for i in 0..book.len() {
      let s = &book[i];
      wf.map.insert(s.to_string(), wf.map.get(s).unwrap_or(&0) + 1);
    }
    // println!("{:?}", wf.map);
    return wf;
  }

  fn get(&self, word: String) -> i32 {
    if self.map.contains_key(&word) {
      return self.map[&word];
    } else {
      return 0;
    }
  }
}

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * let obj = WordsFrequency::new(book);
 * let ret_1: i32 = obj.get(word);
 */

#[test]
fn test() {
  let book: Vec<String> = vec!["i", "have", "an", "apple", "he", "have", "a", "pen"].into_iter().map(|s| s.to_owned()).collect();
  let words_frequency = WordsFrequency::new(book);
  assert_eq!(words_frequency.get("you".to_owned()), 0); //返回0，"you"没有出现过
  assert_eq!(words_frequency.get("have".to_owned()), 2); //返回2，"have"出现2次
  assert_eq!(words_frequency.get("an".to_owned()), 1); //返回1
  assert_eq!(words_frequency.get("apple".to_owned()), 1); //返回1
  assert_eq!(words_frequency.get("pen".to_owned()), 1); //返回1

}
