use std::cmp::Ordering;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn pacific_atlantic(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let m = matrix.len();
    if m == 0 {
      return vec![];
    }
    let n = matrix[0].len();
    if n == 0 {
      return vec![];
    }
    let can_reach = |edge: &(usize, usize), i: usize, j: usize, memo: &Vec<Vec<bool>>| -> bool {
      if i == edge.0 || j == edge.1 {
        return true;
      }

      let steps = [(1, 0), (-1, 0), (0, 1), (0, -1)];
      for step in steps.iter() {
        let i2 = i as i32 + step.0;
        let j2 = j as i32 + step.1;
        if i2 < 0 || i2 >= m as i32 || j2 < 0 || j2 >= n as i32 {
          continue;
        }
        let i2 = i2 as usize;
        let j2 = j2 as usize;
        if memo[i2][j2] && matrix[i][j] >= matrix[i2][j2] {
          return true;
        }
      }

      false
    };

    let calc = |edge: &(usize, usize), memo: &mut Vec<Vec<bool>>| {
      let mut hit = true;
      while hit {
        hit = false;
        for i in 0..m {
          for j in 0..n {
            if !memo[i][j] && can_reach(&edge, i, j, &memo) {
              hit = true;
              memo[i][j] = true;
            }
          }
        }
      }
    };

    let edge = (m - 1, n - 1);
    let mut memo1 = vec![vec![false; matrix[0].len()]; matrix.len()];
    calc(&edge, &mut memo1);
    let edge = (0, 0);
    let mut memo2 = vec![vec![false; matrix[0].len()]; matrix.len()];
    calc(&edge, &mut memo2);

    // println!("memo1: {:?}", memo1);
    // println!("memo2: {:?}", memo2);

    let mut ret = vec![];
    for i in 0..m {
      for j in 0..n {
        if memo1[i][j] && memo2[i][j] {
          ret.push(vec![i as i32, j as i32]);
        }
      }
    }
    ret
  }
}

#[test]
fn test() {
  let matrix: Vec<Vec<i32>> = vec![];
  let expect: Vec<Vec<i32>> = vec![];
  let actual = Solution::pacific_atlantic(matrix);
  assert_eq!(actual, expect);

  let matrix = vec_of_vec![
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ];
  let expect = vec_of_vec![[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
  let mut actual = Solution::pacific_atlantic(matrix);
  actual.sort_by(|a, b| {
    let ret = a[0].cmp(&b[0]);
    if ret == Ordering::Equal {
      a[1].cmp(&b[1])
    } else {
      ret
    }
  });
  assert_eq!(actual, expect);
}
