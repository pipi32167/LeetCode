#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn largest_sum_after_k_negations(mut a: Vec<i32>, mut k: i32) -> i32 {
    a.sort();

    // println!("{:?}", a);
    let mut a: Vec<i32> = a
      .iter()
      .map(|x| {
        if *x < 0 && k > 0 {
          k -= 1;
          -*x
        } else {
          *x
        }
      })
      .collect();

    a.sort();
    if k % 2 == 1 {
      a[0] = -a[0];
    }
    // println!("{:?}", a);
    a.iter().sum::<i32>()
  }
}

#[test]
fn test() {
  let a = vec![4, 2, 3];
  let k = 1;
  assert_eq!(Solution::largest_sum_after_k_negations(a, k), 5);

  let a = vec![3, -1, 0, 2];
  let k = 3;
  assert_eq!(Solution::largest_sum_after_k_negations(a, k), 6);

  let a = vec![2, -3, -1, 5, -4];
  let k = 2;
  assert_eq!(Solution::largest_sum_after_k_negations(a, k), 13);

  let a = vec![-8, 3, -5, -3, -5, -2];
  let k = 6;
  assert_eq!(Solution::largest_sum_after_k_negations(a, k), 22);
}
