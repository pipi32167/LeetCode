#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
    let mut before = nums[0];
    if nums.len() == 1 {
      return before;
    }
    let mut cnt = 1;
    for i in 1..nums.len() {
      if nums[i] != before && cnt != 2 {
        return before;
      }
      cnt = if before == nums[i] { 2 } else { 1 };
      before = nums[i];
    }
    
    before
  }
}


#[test]
fn test() {
  let nums = vec![1];
  assert_eq!(Solution::single_non_duplicate(nums), 1);

  let nums = vec![1,1,2];
  assert_eq!(Solution::single_non_duplicate(nums), 2);

  let nums = vec![1,2,2];
  assert_eq!(Solution::single_non_duplicate(nums), 1);

  let nums = vec![1,1,2,3,3,4,4,8,8];
  assert_eq!(Solution::single_non_duplicate(nums), 2);

  let nums = vec![3,3,7,7,10,11,11];
  assert_eq!(Solution::single_non_duplicate(nums), 10);
}