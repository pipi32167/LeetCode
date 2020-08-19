mod problem_offer_04 {

  pub fn find_number_in2_d_array(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    if matrix.len() == 0 || matrix[0].len() == 0 {
      return false;
    }
    let m = matrix.len();
    let n = matrix[0].len();
    if target < matrix[0][0] {
      return false;
    }
    for i in 0..m {
      // println!("{}", i);
      for j in 0..n {
        // println!("{}, {}, {}", i, j, matrix[i][j]);
        if target == matrix[i][j] {
          return true;
        } else if target < matrix[i][j] {
          break
        }
      }
    }
    false
  }
}

#[test]
fn test_find_number_in2_d_array() {
  let matrix = vec![
    vec![1, 4, 7, 11, 15],
    vec![2, 5, 8, 12, 19],
    vec![3, 6, 9, 16, 22],
    vec![10, 13, 14, 17, 24],
    vec![18, 21, 23, 26, 30],
  ];
  assert!(problem_offer_04::find_number_in2_d_array(matrix.clone(), 5));
  assert!(problem_offer_04::find_number_in2_d_array(matrix.clone(), 1));
  assert!(problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    30
  ));
  assert!(problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    24
  ));
  assert!(problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    10
  ));
  assert!(!problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    0
  ));
  assert!(!problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    31
  ));
  assert!(!problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    20
  ));
  let matrix = vec![
    vec![1, 3, 5, 7, 9],
    vec![2, 4, 6, 8, 10],
    vec![11, 13, 15, 17, 19],
    vec![12, 14, 16, 18, 20],
    vec![21, 22, 23, 24, 25],
  ];
  assert!(problem_offer_04::find_number_in2_d_array(
    matrix.clone(),
    13
  ));
}
