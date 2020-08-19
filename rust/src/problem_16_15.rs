mod problem_16_15 {
  use std::collections::HashMap;

  pub fn master_mind(solution: String, guess: String) -> Vec<i32> {
    let sbytes = solution.into_bytes();
    let gbytes = guess.into_bytes();
    let mut smap: HashMap<u8, usize> = HashMap::new();

    for &k in &sbytes {
      let cnt = smap.entry(k).or_insert(0);
      *cnt += 1;
    }

    let mut ans = vec![0, 0];
    for i in 0..gbytes.len() {
      if sbytes[i] == gbytes[i] {
        ans[0] += 1;
        let cnt = smap.entry(gbytes[i]).or_insert(0);
        *cnt -= 1;
      }
    }
    for i in 0..gbytes.len() {
      let cnt = smap.entry(gbytes[i]).or_insert(0);
      if sbytes[i] != gbytes[i] && *cnt > 0 {
        ans[1] += 1;
        *cnt -= 1;
      }
    }

    ans
  }
}

#[test]
fn test_master_mind() {
  assert_eq!(problem_16_15::master_mind(String::from("RGBY"), String::from("GGRR")), vec![1, 1]);
}
