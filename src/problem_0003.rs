fn slice(s: &str, begin: usize, end: usize) -> String {
  s.chars().skip(begin).take(end - begin).collect()
}

fn length_of_longest_sub_string(s: &str) -> usize {
  if s.len() <= 1 {
    return s.len();
  }

  let mut res: (usize, usize) = (0, 1);
  let mut max_res: (usize, usize) = (0, 1);

  while res.1 < s.len() {
    let c = slice(s, res.1, res.1 + 1);
    let substr = slice(s, res.0, res.1);
    // println!("c: {}, substr: {}, res: {}", c, substr, substr.as_str().contains(c.as_str()));
    if !substr.as_str().contains(c.as_str()) {
      res.1 += 1;
      // println!("update res: {:?}", res);
      if max_res.1 - max_res.0 < res.1 - res.0 {
        max_res = res;
        // println!("update max_res: {:?}", max_res);
      }
    } else {
      res = (res.0 + 1, res.0 + 2);
      // println!("update res: {:?}", res);
    }
  }

  max_res.1 - max_res.0
}

#[test]
fn test_slice() {
  assert_eq!(slice("012345", 0, 6), "012345");
  assert_eq!(slice("012345", 0, 1), "0");
  assert_eq!(slice("012345", 1, 2), "1");
  assert_eq!(slice("012345", 6, 7), "");
}

#[test]
fn test_length_of_longest_sub_string() {
  assert_eq!(length_of_longest_sub_string(""), 0);
  assert_eq!(length_of_longest_sub_string("a"), 1);
  assert_eq!(length_of_longest_sub_string("aaaa"), 1);
  assert_eq!(length_of_longest_sub_string("abca"), 3);
  assert_eq!(length_of_longest_sub_string("abcabcbb"), 3);
  assert_eq!(length_of_longest_sub_string("bbbbb"), 1);
  assert_eq!(length_of_longest_sub_string("pwwkew"), 3);
  assert_eq!(length_of_longest_sub_string("au"), 2);
  assert_eq!(length_of_longest_sub_string("dvdf"), 3);
}
