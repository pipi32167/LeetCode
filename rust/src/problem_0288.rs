use std::collections::{HashMap, HashSet};

#[derive(Debug)]
struct ValidWordAbbr {
  short_words: HashMap<String, HashSet<String>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ValidWordAbbr {
  fn short(s: &String) -> String {
    if s.len() <= 2 {
      s.clone()
    } else {
      format!(
        "{}{}{}",
        s.chars().nth(0).unwrap(),
        s.len() - 2,
        s.chars().last().unwrap()
      )
    }
  }

  fn new(dictionary: Vec<String>) -> Self {
    let mut short_words = HashMap::new();
    for s in dictionary {
      let short = Self::short(&s);
      let entry = short_words.entry(short).or_insert(HashSet::new());
      entry.insert(s);
    }
    Self {
      short_words: short_words,
    }
  }

  fn is_unique(&self, word: String) -> bool {
    if let Some(val) = self.short_words.get(&Self::short(&word)) {
      // println!("{:?}", val);
      if val.len() == 1 && !val.contains(&word) || val.len() > 1 {
        return false;
      }
    }
    true
  }
}

#[test]
fn test_valid_word_abbr() {
  let word_dict = ValidWordAbbr::new(vec![
    "deer".to_string(),
    "door".to_string(),
    "cake".to_string(),
    "card".to_string(),
  ]);
  println!("{:?}", word_dict);
  assert!(!word_dict.is_unique("dear".to_string())); // return False
  assert!(word_dict.is_unique("cart".to_string())); // return True
  assert!(!word_dict.is_unique("cane".to_string())); // return False
  assert!(word_dict.is_unique("make".to_string())); // return True
}
