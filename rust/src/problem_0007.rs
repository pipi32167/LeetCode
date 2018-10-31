mod problem_0007 {
  pub fn reverse(n: i32) -> Option<i32> {
    let mut num = if n < 0 { -n } else { n };

    let mut res = 0i32;

    while num > 0 {
      // println!("{}, {}, {}, {}", res, num, res * 10, num % 10);
      res = res * 10 + num % 10;
      num /= 10;
    }
    
    Some(if n < 0 { -res } else { res })
  }
}

#[test]
fn test_reverse() {
  assert_eq!(problem_0007::reverse(123i32).unwrap(), 321i32);
  assert_eq!(problem_0007::reverse(-123i32).unwrap(), -321i32);
  assert_eq!(problem_0007::reverse(120i32).unwrap(), 21i32);
}
