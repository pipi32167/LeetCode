#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_numbers(nums: Vec<i32>) -> i32 {
    let calc_numbers = |mut num| -> usize {
      let mut cnt = 0;
      // let before_num = num;
      while num > 0 {
        cnt += 1;
        num /= 10;
      }
      // println!("{},{}", before_num, cnt);
      cnt
    };
    let mut ret = 0;
    for num in nums {
      if calc_numbers(num) % 2 == 0 {
        ret += 1;
      }
    }
    ret
  }
}

#[test]
fn test() {
  let nums = vec![555, 901, 482, 1771];
  assert_eq!(Solution::find_numbers(nums), 1);
}
