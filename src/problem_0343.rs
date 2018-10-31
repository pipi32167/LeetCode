mod problem_0343 {

  pub fn integer_break(n: usize) -> u64 {
    let mut dp: Vec<u64> = vec![];
    dp.resize_default(n + 1);

    for i in 1usize..=n {
      let l: usize = (i as u32 as f64).sqrt() as usize;
      // println!("i: {}, l: {}", i, l);
      for j in l..=(i - 1) {
        dp[i] = dp[i].max((j as u64).max(dp[j]) * ((i - j) as u64).max(dp[i - j]));
      }
    }
    // println!("{:?}", dp);
    dp[n]
  }
}

#[test]
fn name_integer_break() {
  assert_eq!(problem_0343::integer_break(2), 1);
  assert_eq!(problem_0343::integer_break(10), 36);
  assert_eq!(problem_0343::integer_break(100), 7412080755407364u64);
}
