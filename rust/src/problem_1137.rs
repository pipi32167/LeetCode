
#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn solve(n: i32, memo: &mut Vec<i32>) -> i32 {
    match n {
      0 => 0,
      1 => 1,
      2 => 1,
      _ => if n as usize - 3 < memo.len() {
        memo[n as usize - 3]
      } else {
        let ret = Self::solve(n - 1, memo) + Self::solve(n - 2, memo) + Self::solve(n - 3, memo);
        memo.push(ret);
        ret
      },
    }
  }

  pub fn tribonacci(n: i32) -> i32 {
    // let mut memo = vec![];
    // Self::solve(n, &mut memo)
    let ret = [0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852, 2082876103];
    ret[n as usize]
  }
}

#[test]
fn test() {
  assert_eq!(Solution::tribonacci(4), 4);
  assert_eq!(Solution::tribonacci(25), 1389537);
  assert_eq!(Solution::tribonacci(37), 2082876103);

  // let ret: Vec<i32> = (0..=37).map(|i| Solution::tribonacci(i as i32)).collect();
  // println!("{:?}", ret);
}
