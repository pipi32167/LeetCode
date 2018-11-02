use std::collections::HashMap;

fn can_construct(ranson_note: &str, magazine: &str) -> bool {
  let mut dict: HashMap<char, u32> = HashMap::new();

  for c in magazine.chars() {
    *dict.entry(c).or_insert(0) += 1;
  }

  for c in ranson_note.chars() {
    let count = dict.entry(c).or_insert(0);
    if *count > 0 {
      *count -= 1;
    } else {
      return false;
    }
  }
  true
}

#[test]
fn test_can_construct() {
  assert_eq!(can_construct("a", "b"), false);
  assert_eq!(can_construct("aa", "ab"), false);
  assert_eq!(can_construct("aa", "aab"), true);
}
