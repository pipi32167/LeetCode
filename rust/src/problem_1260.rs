#[derive(Debug)]
struct Solution {}

fn solve(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
  let (m, n) = (grid.len(), grid[0].len());
  let mut ret = vec![vec![0]; m];
  for i in 0..m {
    ret[i].extend(grid[i].iter().take(n - 1));
  }
  ret[0][0] = grid[m - 1][n - 1];
  for i in 1..m {
    ret[i][0] = grid[i - 1][n - 1];
  }
  ret
}

impl Solution {
  pub fn shift_grid(mut grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    for _i in 0..k {
      grid = solve(grid);
    }
    grid
  }
}

#[test]
fn test() {
  let grid = vec_of_vec![[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let k = 1;
  let expect = vec_of_vec![[9, 1, 2], [3, 4, 5], [6, 7, 8]];
  assert_eq!(Solution::shift_grid(grid, k), expect);
  let grid = vec_of_vec![[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]];
  let k = 4;
  let expect = vec_of_vec![[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]];
  assert_eq!(Solution::shift_grid(grid, k), expect);
  let grid = vec_of_vec![[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let k = 9;
  let expect = vec_of_vec![[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  assert_eq!(Solution::shift_grid(grid, k), expect);
}
