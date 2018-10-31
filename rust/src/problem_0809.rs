type Stat = Vec<(char, usize)>;

fn stat(word: &str) -> Stat {
  if word.len() == 0 {
    return vec![];
  }
  let mut result: Stat = vec![];
  let mut chars = word.chars();
  let mut last_char = chars.next().unwrap();
  let mut count: usize = 1;
  for c in chars {
    if last_char == c {
      count += 1
    } else {
      result.push((last_char, count));
      last_char = c;
      count = 1
    }
  }
  result.push((last_char, count));
  result
}

fn is_expressive(word1: &str, word2: &str) -> bool {
  let stat1 = stat(word1);
  let stat2 = stat(word2);
  if stat1.len() != stat2.len() {
    // println!("return false 1: {}, {:?}, {}, {:?}", word1, stat1, word2, stat2);
    return false;
  }

  // println!("{:?}, {:?}", stat1, stat2);
  let mut iter1 = stat1.iter();
  let mut iter2 = stat2.iter();

  for _ in 0..stat1.len() {
    let st1 = iter1.next().unwrap();
    let st2 = iter2.next().unwrap();

    if st1.0 != st1.0 {
      // println!("return false 2: {}, {:?}, {}, {:?}", word1, st1, word2, st2);
      return false;
    }
    if st1.1 > st2.1 {
      // println!("return false 3: {}, {:?}, {}, {:?}", word1, st1, word2, st2);
      return false;
    }
    if st1.1 < st2.1 && st2.1 < 3 {
      // println!("return false 4: {}, {:?}, {}, {:?}", word1, st1, word2, st2);
      return false;
    }
  }
  true
}

fn expressive_words(string: &str, words: Vec<&str>) -> usize {
  words
    .into_iter()
    .filter(|word| is_expressive(word, string))
    .count()
}

#[test]
fn test_expressive_words() {
  let string: &str = "heeellooo";
  let words: Vec<&str> = vec!["hello", "hi", "helo"];
  assert_eq!(expressive_words(string, words), 1);

  let string: &str = "heeelllooo";
  let words: Vec<&str> = vec!["hello", "hi", "helo"];
  assert_eq!(expressive_words(string, words), 2);
}

#[test]
fn test_stat() {
  assert_eq!(stat(""), vec![]);
  assert_eq!(stat("a"), vec![('a', 1)]);
  assert_eq!(stat("aabbcc"), vec![('a', 2), ('b', 2), ('c', 2)]);
}

#[test]
fn test_is_expressive() {
  assert_eq!(is_expressive("ab", "aaab"), true);
  assert_eq!(is_expressive("ab", "abbb"), true);
  assert_eq!(is_expressive("ab", "aaabbbb"), true);
  assert_eq!(is_expressive("ab", "aabb"), false);
  assert_eq!(is_expressive("ab", "aabbb"), false);
  assert_eq!(is_expressive("abbb", "abb"), false);
  assert_eq!(is_expressive("abb", "abbb"), true);
}
