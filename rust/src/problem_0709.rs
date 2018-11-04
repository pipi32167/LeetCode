fn to_lower_case(s: &str) -> String {
  let mut result: Vec<char> = vec![];

  for c in s.chars() {
    if c >= 'A' && c <= 'Z' {
      let c2 = (c as u8) - ('A' as u8) + ('a' as u8);
      // println!("{}, {}, {}, {}", c2, (c as u8), ('A' as u8), ('a' as u8));
      result.push(c2 as char)
    } else {
      // println!("{}", c);
      result.push(c)
    }
  }

  result.into_iter().collect()
}

#[test]
fn test_to_lower_case() {
  assert_eq!(to_lower_case("Hello"), "hello");
  assert_eq!(to_lower_case("here"), "here");
  assert_eq!(to_lower_case("LOVELY"), "lovely");
}
