#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn two_sum_less_than_k(mut a: Vec<i32>, k: i32) -> i32 {
    if a.len() < 2 {
      return -1;
    }

    a.sort();
    if a[0] + a[1] >= k {
      return -1;
    }
    let mut max_ret = 0;
    for i in 0..a.len() {
      if a[i] > k {
        break
      }
      for j in i+1..a.len() {
        if a[i] + a[j] >= k {
          break;
        }
        max_ret = max_ret.max(a[i] + a[j]);
      }
    }

    max_ret
  }
}

#[test]
fn test() {
    let a = vec![34,23,1,24,75,33,54,8];
    let k = 60;
    assert_eq!(Solution::two_sum_less_than_k(a, k), 58);
    let a = vec![10,20,30];
    let k = 15;
    assert_eq!(Solution::two_sum_less_than_k(a, k), -1);

    let a = vec![1;100];
    let k = 2000;
    assert_eq!(Solution::two_sum_less_than_k(a, k), 2);
}