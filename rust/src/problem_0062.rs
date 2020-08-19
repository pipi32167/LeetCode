
mod problem_0062 {

  pub fn unique_paths(m: usize, n: usize) -> u64 {
    let mut dp: Vec<u64> = vec![0,1];
    dp.resize_with((m + 1) * (n + 1), Default::default);
    for i in 1..=m {
      for j in 1..=n {
        let res = dp[(i - 1) * (n + 1) + j] + dp[i * (n + 1) + j - 1];
        dp[i * (n + 1) + j] = res;
      }
    }
    // println!("{:?}", dp);
    dp[(m + 1) * (n + 1) - 1]
  }
}

#[test]
fn test_unique_paths() {

  assert_eq!(problem_0062::unique_paths(2, 2), 2u64);
  assert_eq!(problem_0062::unique_paths(7, 3), 28u64);
  assert_eq!(problem_0062::unique_paths(20, 11), 20030010u64);
  assert_eq!(problem_0062::unique_paths(23, 12), 193536720u64);
}
