fn is_palindrome(s: &str, start: usize, end: usize) -> bool {
  let mut i = start;
  let mut j = end;
  while i < j {
    // println!("{}, {}, {:?}, {:?}", i, j, s.chars().nth(i), s.chars().nth(j));
    if s.chars().nth(i) != s.chars().nth(j) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  true
}

fn count_sub_strings(s: &str) -> u32 {
  let mut count: u32 = 0;
  for i in 1..=s.len() {
    for j in 0..=s.len() - i {
      // println!("{}, {}, {}, {}", s, j, j + i - 1, is_palindrome(s, i, j + i - 1));
      if is_palindrome(s, j, j + i - 1) {
        count += 1
      }
    }
  }
  count
}

#[test]
fn test_is_palindrome() {
  assert_eq!(is_palindrome("a", 0, 0), true);
  assert_eq!(is_palindrome("aa", 0, 1), true);
  assert_eq!(is_palindrome("aaa", 0, 2), true);
  assert_eq!(is_palindrome("aaa", 2, 2), true);
  assert_eq!(is_palindrome("aba", 0, 2), true);
  assert_eq!(is_palindrome("ab", 0, 1), false);
  assert_eq!(is_palindrome("abc", 0, 2), false);
}

#[test]
fn test_count_sub_strings() {
  assert_eq!(count_sub_strings("abc"), 3);
  assert_eq!(count_sub_strings("aba"), 4);
  assert_eq!(count_sub_strings("aaa"), 6);
}
