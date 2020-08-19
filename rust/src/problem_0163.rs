use std::collections::VecDeque;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_missing_ranges(nums: Vec<i32>, lower: i32, upper: i32) -> Vec<String> {
    let mut nums: VecDeque<i64> = nums.iter().map(|&x| x as i64).collect();
    let lower = lower as i64;
    let upper = upper as i64;
    if !nums.contains(&lower) {
      nums.push_front(lower - 1);
    }
    if !nums.contains(&upper) {
      nums.push_back(upper + 1);
    }
    let mut ret = vec![];
    let mut before = nums[0];
    let mut put_str = |before: i64, n: i64| match n - before {
      0                               => (),
      1                               => (),
      2                               => ret.push(format!("{}", n - 1)),
      v if v > 2                      => ret.push(format!("{}->{}", before + 1, n - 1)),
      _                               => panic!(),
    };
    for i in 1..nums.len() {
      let n = nums[i];
      // println!("{}, {}", before, n);
      put_str(before, n);
      before = n;
    }
    ret
  }
}

#[test]
fn test() {
  let nums = vec![0, 1, 3, 50, 75];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["2", "4->49", "51->74", "76->99"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["0->99"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![0];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["1->99"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![1];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["0", "2->99"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![99];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["0->98"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![98];
  let lower = 0;
  let upper = 99;
  let expect = vec_of_strings!["0->97", "99"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![0];
  let lower = 0;
  let upper = 0;
  let expect: Vec<String> = vec_of_strings![];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![0];
  let lower = 0;
  let upper = 0;
  let expect: Vec<String> = vec_of_strings![];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![];
  let lower = 1;
  let upper = 1;
  let expect: Vec<String> = vec_of_strings!["1"];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);

  let nums = vec![1,1,1];
  let lower = 1;
  let upper = 1;
  let expect: Vec<String> = vec_of_strings![];
  let actual = Solution::find_missing_ranges(nums, lower, upper);
  assert_eq!(actual, expect);
}