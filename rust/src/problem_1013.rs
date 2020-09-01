#[derive(Debug)]
struct Solution {}

impl Solution {
  

  pub fn can_three_parts_equal_sum(mut a: Vec<i32>) -> bool {
    let sum: i32 = a.iter().sum();
    // println!("{:?}", a);
    // println!("sum: {}, {}", sum, sum / 3);
    if sum % 3 != 0 {
      return false;
    }
    let mut sum2 = 0;
    let mut cnt = 0;
    for i in a {
      sum2 += i;
      if sum2 == sum / 3  {
        sum2 = 0;
        cnt += 1;
      }
    }
    cnt == 3 || sum == 0 && cnt >= 3
  }
}


#[test]
fn test() {
  let a = vec![0,2,1,-6,6,7,9,-1,2,0,1];
  assert!(!Solution::can_three_parts_equal_sum(a));

  let a = vec![0,2,1,-6,6,-7,9,1,2,0,1];
  assert!(Solution::can_three_parts_equal_sum(a));

  let a = vec![3,3,6,5,-2,2,5,1,-9,4];
  assert!(Solution::can_three_parts_equal_sum(a));

  let a = vec![10,-10,10,-10,10,-10,10,-10];
  assert!(Solution::can_three_parts_equal_sum(a));
}