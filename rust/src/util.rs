mod util {

  pub fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
      1
    } else {
      fibonacci(n - 1) + fibonacci(n - 2)
    }
  }

}

#[cfg(test)]
mod tests {
  use super::util::*;

  #[test]
  fn test_fibonacci() {
    assert_eq!(fibonacci(0), 1);
    assert_eq!(fibonacci(1), 1);
    assert_eq!(fibonacci(2), 2);
    assert_eq!(fibonacci(3), 3);
    assert_eq!(fibonacci(4), 5);
  }
}
