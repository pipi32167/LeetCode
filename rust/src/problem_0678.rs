fn go(s: &str, idx: usize, stack: &mut Vec<char>) -> bool {
  if idx >= s.len() {
    return stack.len() == 0;
  }

  if s.chars().nth(idx) == Some('(') {
    (*stack).push('(');
    return go(s, idx + 1, stack);
  }

  if s.chars().nth(idx) == Some(')') {
    if stack.last() != Some(&'(') {
      return false;
    }
    (*stack).pop();
    return go(s, idx + 1, stack);
  }

  if go(s, idx + 1, & mut (*stack).clone()) {
    return true;
  }

  (*stack).push('(');
  if go(s, idx + 1, & mut (*stack).clone()) {
    return true;
  }
  (*stack).pop();

  (*stack).pop();
  if go(s, idx + 1, & mut (*stack).clone()) {
    return true;
  }
  (*stack).push('(');

  false
}

fn check_valid_string(s: &str) -> bool {
  let mut stack: Vec<char> = vec![];
  go(s, 0, &mut stack)
}

#[test]
fn test_check_valid_string() {
  assert_eq!(check_valid_string("()"), true);
  assert_eq!(check_valid_string("(*)"), true);
  assert_eq!(check_valid_string("(*))"), true);
  assert_eq!(check_valid_string("(*())"), true);
  assert_eq!(check_valid_string("(*"), true);
  assert_eq!(check_valid_string("*)"), true);
  assert_eq!(check_valid_string("(("), false);
  assert_eq!(check_valid_string(")("), false);
  assert_eq!(check_valid_string("())"), false);
  assert_eq!(check_valid_string("()("), false);
  assert_eq!(check_valid_string("(()"), false);
  let mut s: Vec<char> = vec![];
  for _i in 0..50 {
    s.push('(')
  }
  for _i in 0..50 {
    s.push(')')
  }
  let string: String = s.into_iter().collect();
  assert_eq!(check_valid_string(string.as_str()), true);

  let mut s: Vec<char> = vec![];
  for _i in 0..50 {
    s.push('(');
    s.push(')');
  }
  let string: String = s.into_iter().collect();
  assert_eq!(check_valid_string(string.as_str()), true);
  let mut s: Vec<char> = vec![];
  for _i in 0..100 {
    s.push('*');
  }
  let string: String = s.into_iter().collect();
  assert_eq!(check_valid_string(string.as_str()), true);
}
