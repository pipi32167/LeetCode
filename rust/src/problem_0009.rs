mod problem_0009 {
  pub fn is_palindrome(n: i32) -> bool {
    if n < 0 {
      return false;
    }
    let mut num = n;
    let mut res = 0i32;

    while num > 0 {
      // println!("{}, {}, {}, {}", res, num, res * 10, num % 10);
      res = res * 10 + num % 10;
      num /= 10;
    }

    return res == n;
  }
}

#[test]
fn test_is_palindrome() {
  assert_eq!(problem_0009::is_palindrome(0i32), true);
  assert_eq!(problem_0009::is_palindrome(11i32), true);
  assert_eq!(problem_0009::is_palindrome(121i32), true);
  assert_eq!(problem_0009::is_palindrome(123i32), false);
  assert_eq!(problem_0009::is_palindrome(-121i32), false);
}
