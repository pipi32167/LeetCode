mod problem_1200 {
  use std::i32::MAX;
  pub fn minimum_abs_difference(mut arr: Vec<i32>) -> Vec<Vec<i32>> {
    arr.sort();
    let mut min = MAX;
    let mut ret: Vec<Vec<i32>> = Vec::new();
    for i in 1..arr.len() {
      let diff = arr[i] - arr[i - 1];
      if min > diff {
        min = diff;
        ret.clear();
        ret.push(vec![arr[i - 1], arr[i]]);
      } else if min == diff {
        ret.push(vec![arr[i - 1], arr[i]]);
      }
    }
    ret
  }
}

#[test]
fn test_minimum_abs_difference() {
  assert_eq!(
    problem_1200::minimum_abs_difference(vec![4, 2, 1, 3]),
    vec![vec![1, 2], vec![2, 3], vec![3, 4]]
  );
  assert_eq!(
    problem_1200::minimum_abs_difference(vec![1,3,6,10,15]),
    vec![vec![1, 3]]
  );
  assert_eq!(
    problem_1200::minimum_abs_difference(vec![3,8,-10,23,19,-4,-14,27]),
    vec![vec![-14,-10],vec![19,23],vec![23,27]]
  );

}
