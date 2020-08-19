#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
    let n = matrix.len();
    for i in 0..n {
      for j in (i + 1)..n {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
      }
    }
    // println!("{:?}", matrix);
    for i in 0..n {
      for j in 0..n/2 {
        matrix[i].swap(j, n - 1 - j);
      }
    }
    // println!("{:?}", matrix);
  }
}

#[test]
fn test_rotate() {
  let mut matrix = vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]];
  let result = vec![vec![7, 4, 1], vec![8, 5, 2], vec![9, 6, 3]];
  Solution::rotate(&mut matrix);
  assert_eq!(matrix, result);
  let mut matrix = vec![
    vec![5, 1, 9, 11],
    vec![2, 4, 8, 10],
    vec![13, 3, 6, 7],
    vec![15, 14, 12, 16],
  ];
  let result = vec![
    vec![15, 13, 2, 5],
    vec![14, 3, 4, 1],
    vec![12, 6, 8, 9],
    vec![16, 7, 10, 11],
  ];
  Solution::rotate(&mut matrix);
  assert_eq!(matrix, result);
}
