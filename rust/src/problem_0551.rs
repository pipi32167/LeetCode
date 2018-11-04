fn check_record(s: &str) -> bool {
  let mut absend_count = 0;
  for c in s.chars() {
    if c == 'A' {
      absend_count += 1
    }
  }

  let is_continuous_late = s.contains("LLL");

  absend_count <= 1 && !is_continuous_late
}

#[test]
fn test_check_record() {
  assert_eq!(check_record("PPALLP"), true);
  assert_eq!(check_record("PPALLL"), false);
}
