#[derive(Debug)]
struct Solution {}

impl Solution {
  fn find_dense_rows_cols(m: &Vec<Vec<i32>>) -> (Vec<usize>, Vec<usize>) {
    let mut rows = vec![];
    let mut cols = vec![];
    for i in 0..m.len() {
      for j in 0..m[i].len() {
        if m[i][j] != 0 {
          if !rows.contains(&i) {
            rows.push(i);
          }
          if !cols.contains(&j) {
            cols.push(j);
          }
        }
      }
    }
    (rows, cols)
  }

  fn vector_multiply(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>, a_row: usize, b_col: usize) -> i32 {
    let mut ret = 0;
    for i in 0..b.len() {
      ret += a[a_row][i] * b[i][b_col];
    }
    ret
  }

  pub fn multiply(a: Vec<Vec<i32>>, b: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let (a_rows, _a_cols) = Self::find_dense_rows_cols(&a);
    let (_b_rows, b_cols) = Self::find_dense_rows_cols(&b);

    let mut ret = vec![vec![0; b[0].len()]; a.len()];

    for i in 0..ret.len() {
      if !a_rows.contains(&i) {
        continue;
      }
      for j in 0..ret[0].len() {
        if !b_cols.contains(&j) {
          continue;
        }
        ret[i][j] = Self::vector_multiply(&a, &b, i, j);
      }
    }
    ret
  }
}


#[test]
fn find_dense_rows_cols() {
  
  let a = vec_of_vec![
    [ 1, 0, 0],
    [-1, 0, 3]
  ];
  let expect = (vec![0, 1], vec![0, 2]);
  assert_eq!(Solution::find_dense_rows_cols(&a), expect);
}

#[test]
fn test_vector_multiply() {
    
  let a = vec_of_vec![
    [ 1, 0, 0],
    [-1, 0, 3]
  ];
  let b = vec_of_vec![
    [ 7, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 1 ]
  ];
  assert_eq!(Solution::vector_multiply(&a, &b, 0, 0), 7);
  assert_eq!(Solution::vector_multiply(&a, &b, 1, 0), -7);
}

#[test]
fn test() {
  let a = vec_of_vec![
    [ 1, 0, 0],
    [-1, 0, 3]
  ];
  let b = vec_of_vec![
    [ 7, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 1 ]
  ];
  let expect = vec_of_vec![
    [ 7, 0, 0],
    [-7, 0, 3]
  ];
  assert_eq!(Solution::multiply(a, b), expect);

  let a = vec_of_vec![[1,-5]];
  let b = vec_of_vec![[12],[-1]];
  let expect = vec_of_vec![[17]];
  assert_eq!(Solution::multiply(a, b), expect);

}