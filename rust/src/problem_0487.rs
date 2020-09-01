#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
    use std::collections::VecDeque;
    let mut zero_cnt = 0;
    let mut zeros = VecDeque::from(vec![-1]);
    let mut max_len = 0;
    for i in 0..nums.len() {
      if nums[i] == 0 {
        zeros.push_back(i as i32);
        zero_cnt += 1;
        if zeros.len() > 2 {
          zeros.pop_front();
        }
      } else {
        if zero_cnt <= 1 {
          max_len = i + 1;
        } else {
          max_len = max_len.max(i - zeros[zeros.len() - 2] as usize);
        }
      }
    }
    if zero_cnt <= 1 {
      max_len = nums.len();
    } else if zero_cnt == nums.len() {
      max_len = 1;
    }
    max_len as i32
  }
}

#[test]
fn test() {
  let nums = vec![1,0,1,1,0];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 4);

  let nums = vec![1];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 1);

  let nums = vec![0];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 1);

  let nums = vec![1; 10000];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 10000);

  let nums = vec![0; 10000];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 1);

  let nums: Vec<i32> = vec![];
  assert_eq!(Solution::find_max_consecutive_ones(nums), 0);

  let mut nums = vec![0; 5000];
  nums.extend(vec![1; 5000]);
  assert_eq!(Solution::find_max_consecutive_ones(nums), 5001);

  let mut nums = vec![1; 4999];
  nums.push(0);
  nums.extend(vec![1; 5000]);
  assert_eq!(Solution::find_max_consecutive_ones(nums), 10000);

  let nums = [[0,1]; 5000].concat();
  assert_eq!(Solution::find_max_consecutive_ones(nums), 3);
}
