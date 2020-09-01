#[derive(Debug)]
struct Solution {}

impl Solution {
  fn solve(nums: &Vec<i32>, edge: i32, memo: &mut Vec<bool>, mut remain: i32, mut cnt: i32) -> bool {
    // println!("{:?}, {}, {}", memo, remain, cnt);
    if remain == 0 {
      cnt += 1;
      remain = edge;
    }

    if cnt == 4 {
      return true;
    }
    
    for i in 0..nums.len() {
      if memo[i] {
        continue;
      }
      if remain < nums[i] {
        break;
      }
      remain -= nums[i];
      memo[i] = true;
      if Self::solve(nums, edge, memo, remain, cnt) {
        return true;
      }
      remain += nums[i];
      memo[i] = false;
    }
    false
  }

  pub fn makesquare(mut nums: Vec<i32>) -> bool {
    let perimeter: i32 = nums.iter().sum();
    if perimeter % 4 != 0 {
      return false;
    }

    let edge = perimeter / 4;
    nums.sort();
    nums.reverse();
    let mut memo = vec![false; nums.len()];
    Self::solve(&nums, edge, &mut memo, edge, 0)
  }
}

#[test]
fn test() {
    
  assert!(Solution::makesquare(vec![1,1,2,2,2]));
  assert!(!Solution::makesquare(vec![3,3,3,3,4]));
  assert!(!Solution::makesquare(vec![5,5,5,5,16,4,4,4,4,4,3,3,3,3,4]));
}