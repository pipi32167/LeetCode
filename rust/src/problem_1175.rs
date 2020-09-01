#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn num_prime_arrangements(n: i32) -> i32 {
    let mut primes = vec![2];
    let is_prime = |x: i32, primes: &Vec<i32>| -> bool {
      for p in primes {
        if x % p == 0 {
          return false;
        }
      }
      true
    };
    for i in 3..=n {
      if !primes.contains(&i) && is_prime(i, &primes) {
        primes.push(i);
      }
    }
    let prime_cnt = primes.len() as i64;
    let m = (10 as i64).pow(9) + 7;
    // println!("m: {}, prime count: {}", m, prime_cnt);
    let calc_factorial = |cnt: i64, mut ret: i64| -> i64 {
      for i in 1..=cnt {
        ret *= i;
        ret %= m;
      }
      ret
    };
    let ret = calc_factorial(prime_cnt, 1);
    calc_factorial(n as i64 - prime_cnt, ret) as i32
  }
}

#[test]
fn test() {
  assert_eq!(Solution::num_prime_arrangements(5), 12);
  assert_eq!(Solution::num_prime_arrangements(11), 86400);
  assert_eq!(Solution::num_prime_arrangements(100), 682289015);
}