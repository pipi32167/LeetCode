#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_min_moves(mut machines: Vec<i32>) -> i32 {
    let sum_clothes: i32 = machines.iter().sum();
    if sum_clothes % machines.len() as i32 != 0 {
      return -1;
    }
    let avg_clothes = sum_clothes / machines.len() as i32;
    machines.iter_mut().for_each(|x| *x -= avg_clothes);

    let (mut ret, mut max_sum, mut curr_sum) = (0, 0, 0);
    for m in machines {
      curr_sum += m;
      max_sum = max_sum.max(curr_sum.abs());
      ret = ret.max(max_sum).max(m);
    }
    ret
  }
}

#[test]
fn test() {
  let machines = vec![1, 0, 5];
  assert_eq!(Solution::find_min_moves(machines), 3);

  let machines = vec![0, 3, 0];
  assert_eq!(Solution::find_min_moves(machines), 2);

  let machines = vec![0, 2, 0];
  assert_eq!(Solution::find_min_moves(machines), -1);

  let machines = vec![0, 0, 11, 5];
  assert_eq!(Solution::find_min_moves(machines), 8);

  let machines = vec![4, 0, 0, 4];
  assert_eq!(Solution::find_min_moves(machines), 2);
}
