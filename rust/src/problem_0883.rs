#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn projection_area(grid: Vec<Vec<i32>>) -> i32 {
    let mut ret = 0;
    for i in &grid {
      for j in i {
        if *j > 0 {
          ret += 1;
        }
      }
    }

    let mut ys = vec![0; grid.len()];
    for i in 0..grid.len() {
      for j in 0..grid[i].len() {
        ys[i] = ys[i].max(grid[i][j]);
      }
    }
    // println!("{:?}", ys);
    ret += ys.iter().sum::<i32>();

    let mut zs = vec![0; grid[0].len()];
    for i in 0..grid[0].len() {
      for j in 0..grid.len() {
        zs[j] = zs[j].max(grid[i][j]);
      }
    }
    // println!("{:?}", zs);
    ret += zs.iter().sum::<i32>();

    ret
  }
}

#[test]
fn test() {
  let grid = vec_of_vec![[2]];
  assert_eq!(Solution::projection_area(grid), 5);

  let grid = vec_of_vec![[1, 2], [3, 4]];
  assert_eq!(Solution::projection_area(grid), 17);

  let grid = vec_of_vec![[1, 0], [0, 2]];
  assert_eq!(Solution::projection_area(grid), 8);

  let grid = vec_of_vec![[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  assert_eq!(Solution::projection_area(grid), 14);

  let grid = vec_of_vec![[2, 2, 2], [2, 1, 2], [2, 2, 2]];
  assert_eq!(Solution::projection_area(grid), 21);
}
