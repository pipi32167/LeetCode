mod problem_0598 {

  pub fn max_count(m: u32, n: u32, ops: Vec<(u32, u32)>) -> u32 {
    let mut res = (m, n);

    for op in ops {
      res.0 = res.0.min(op.0);
      res.1 = res.1.min(op.1);
    }

    res.0 * res.1
  }
}

#[test]
fn test_max_count() {
  assert_eq!(problem_0598::max_count(3, 3, vec![(2u32, 2u32), (3, 3)]), 4);
  assert_eq!(problem_0598::max_count(3, 3, vec![]), 9);
  assert_eq!(problem_0598::max_count(40000, 40000, vec![]), 40000u32 * 40000);
  assert_eq!(problem_0598::max_count(39999, 39999, vec![(19999u32, 19999u32)]), 19999u32 * 19999);
}
