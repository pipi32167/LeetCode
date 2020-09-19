#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn num_rook_captures(board: Vec<Vec<char>>) -> i32 {
    let mut r_pos = (-1, -1);
    for i in 0..board.len() {
      for j in 0..board[0].len() {
        if board[i][j] == 'R' {
          r_pos = (i as i32, j as i32);
          break;
        }
      }
    }
    assert_ne!(r_pos, (-1, -1));

    let dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)];
    let mut cnt = 0;
    for dir in dirs.iter() {
      let (mut i, mut j) = r_pos.clone();
      loop {
        i += dir.0;
        j += dir.1;
        if i < 0
          || i as usize >= board.len()
          || j < 0
          || j as usize >= board[0].len()
          || board[i as usize][j as usize] == 'B'
        {
          break;
        }
        if board[i as usize][j as usize] == 'p' {
          cnt += 1;
          break;
        }
      }
    }
    cnt
  }
}

#[test]
fn test() {
  let board = vec_of_vec![
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ];
  assert_eq!(Solution::num_rook_captures(board), 3);

  let board = vec_of_vec![
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ];
  assert_eq!(Solution::num_rook_captures(board), 3);

  let board = vec_of_vec![
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ];
  assert_eq!(Solution::num_rook_captures(board), 0);

  let board = vec_of_vec![
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ];
  assert_eq!(Solution::num_rook_captures(board), 3);
}
