mod problem_0204 {

  pub fn is_prime(n: u32) -> bool {
    match n {
      0..=1 => false,
      2..=3 => true,
      e if e % 2 == 0 => false,
      _ => {
        let mut i: u32 = 3;
        let u: u32 = (n as f64).sqrt().floor() as u32;
        while i <= u {
          if n % i == 0 {
            return false;
          }
          i += 2;
        }
        true
      }
    }
  }

  pub fn next_prime(n: u32) -> u32 {
    match n {
      0..=1 => 2,
      2 => 3,
      _ => {
        let mut res: u32 = if n % 2 == 0 { n + 1 } else { n + 2 };
        while !is_prime(res) {
          res += 2
        }
        res
      }
    }
  }

  pub fn count_primes(n: u32) -> u32 {
    let mut prime: u32 = 1;
    let mut count: u32 = 0;
    loop {
      let next = next_prime(prime);
      if next > n {
        break
      }
      prime = next;
      count += 1;
      // println!("{}, {}", prime, count);
    }
    // println!("{}", count);
    count
  }
}

#[test]
fn test_count_primes() {
  assert_eq!(problem_0204::count_primes(10), 4u32);
  assert_eq!(problem_0204::count_primes(150000), 13848u32);
}

#[test]
fn test_is_prime() {
  assert!(!problem_0204::is_prime(1));
  assert!(problem_0204::is_prime(2));
  assert!(problem_0204::is_prime(3));
  assert!(!problem_0204::is_prime(4));
  assert!(problem_0204::is_prime(5));
  assert!(problem_0204::is_prime(7));
  assert!(!problem_0204::is_prime(100));
  assert!(problem_0204::is_prime(101));
}

#[test]
fn test_next_prime() {
  assert_eq!(problem_0204::next_prime(0), 2);
  assert_eq!(problem_0204::next_prime(1), 2);
  assert_eq!(problem_0204::next_prime(2), 3);
  assert_eq!(problem_0204::next_prime(3), 5);
  assert_eq!(problem_0204::next_prime(4), 5);
  assert_eq!(problem_0204::next_prime(9), 11);
  assert_eq!(problem_0204::next_prime(98), 101);
}
