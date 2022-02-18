use std::i32;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn average(salary: Vec<i32>) -> f64 {
    if salary.len() == 2 {
      return 0_f64;
    }
    let mut sum = 0;
    let len = salary.len();
    let mut min = i32::MAX;
    let mut max = i32::MIN;
    for s in salary {
      sum += s;
      max = max.max(s);
      min = min.min(s);
    }

    // println!("{} {} {}", max, min, sum);

    sum -= max;
    sum -= min;
    sum as f64 / (len - 2) as f64
  }
}

#[test]
fn test() {
  let salary = vec![4000, 3000, 1000, 2000];

  assert_eq!(Solution::average(salary), 2500_f64);
}
