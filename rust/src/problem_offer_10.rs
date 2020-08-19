#[derive(Debug)]
struct Solution {}

const MOD: i32 = 1000000007;
impl Solution {
  fn solve(n: i32, cache: &mut Vec<i32>) -> i32 {
    // println!("{}", n);
    match n {
      0 => 0,
      1 => 1,
      _ => {
        if cache[n as usize] == -1 {
          let mut ret = Self::solve(n - 1, cache) + Self::solve(n - 2, cache);
          if ret > MOD {
            ret %= MOD;
          }
          cache[n as usize] = ret;
        }
        cache[n as usize]
      }
    }
  }

  pub fn fib(n: i32) -> i32 {
    let mut cache: Vec<i32> = vec![-1; 101];
    Self::solve(n, &mut cache)
  }
}

#[test]
fn test_fib() {
  assert_eq!(Solution::fib(2), 1);
  assert_eq!(Solution::fib(5), 5);
  assert_eq!(Solution::fib(100), 687995182);
}
