mod problem_offer_61 {
  pub fn is_straight(nums: Vec<i32>) -> bool {
    let mut nums = nums;
    nums.sort();
    let mut zero_cnt = 0;
    for i in 0..nums.len() {
      if nums[i] == 0 {
        zero_cnt += 1;
        continue;
      }
      if i == 0 {
        continue;
      }
      if nums[i] == nums[i - 1] {
        return false;
      }
    }

    // println!("{:?}, {:?}", nums, zero_cnt);
    (nums[nums.len() - 1] - nums[zero_cnt]) <= 4
  }
}

#[test]
fn test_is_straight() {
  assert!(problem_offer_61::is_straight(vec![1, 2, 3, 4, 5]));
  assert!(problem_offer_61::is_straight(vec![0, 0, 1, 2, 5]));
  assert!(problem_offer_61::is_straight(vec![11, 0, 9, 0, 0]));
  assert!(problem_offer_61::is_straight(vec![11, 0, 13, 0, 0]));
  assert!(!problem_offer_61::is_straight(vec![5, 0, 13, 0, 0]));
  assert!(!problem_offer_61::is_straight(vec![8, 0, 13, 0, 0]));
}
