mod problem_01_08 {
  pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
    let m = matrix.len();
    let n: usize = if m > 0 { matrix[0].len() } else { 0 };

    let mut zero_pos: Vec<(usize, usize)> = vec![];

    for i in 0..m {
      for j in 0..n {
        if matrix[i][j] == 0 {
          zero_pos.push((i, j))
        }
      }
    }
    // println!("{:?}", zero_pos);

    for i in 0..zero_pos.len() {
      let (row, col) = zero_pos[i];
      for j in 0..m {
        // println!("{:?}", (j, col));
        matrix[j][col] = 0;
      }
      for j in 0..n {
        // println!("{:?}", (row, j));
        matrix[row][j] = 0;
      }
    }
    // println!("{:?}", matrix);
  }
}

#[test]
fn test_set_zeroes() {
  let mut matrix = vec![vec![1, 1, 1], vec![1, 0, 1], vec![1, 1, 1]];
  let result = vec![vec![1, 0, 1], vec![0, 0, 0], vec![1, 0, 1]];
  problem_01_08::set_zeroes(&mut matrix);
  assert_eq!(matrix, result);

  let mut matrix = vec![vec![0, 1, 2, 0], vec![3, 4, 5, 2], vec![1, 3, 1, 5]];
  let result = vec![vec![0, 0, 0, 0], vec![0, 4, 5, 0], vec![0, 3, 1, 0]];
  problem_01_08::set_zeroes(&mut matrix);
  assert_eq!(matrix, result);
}
