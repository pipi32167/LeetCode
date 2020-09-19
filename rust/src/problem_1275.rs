#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn tictactoe(moves: Vec<Vec<i32>>) -> String {
    let is_win = |board: &Vec<Vec<i32>>, player: i32| -> bool {
      let expect = (player, player, player);

      for i in 0..3 {
        if (board[0][i], board[1][i], board[2][i]) == expect
          || (board[i][0], board[i][1], board[i][2]) == expect
        {
          return true;
        }
      }

      if (board[0][0], board[1][1], board[2][2]) == expect
        || (board[2][0], board[1][1], board[0][2]) == expect
      {
        return true;
      }
      false
    };
    let is_end = |board: &Vec<Vec<i32>>| -> bool {
      for i in board {
        for j in i {
          if *j == 0 {
            return false;
          }
        }
      }
      true
    };

    let check_end = |board: &Vec<Vec<i32>>| -> Option<String> {
      if is_win(board, 1) {
        return Some("A".to_owned());
      } else if is_win(board, 2) {
        return Some("B".to_owned());
      } else if is_end(board) {
        return Some("Draw".to_owned());
      }

      None
    };
    let mut board = vec![vec![0; 3]; 3];
    for i in 0..moves.len() {
      let (j, k) = (moves[i][0] as usize, moves[i][1] as usize);
      board[j][k] = if i % 2 == 0 { 1 } else { 2 };
    }
    println!("{:?}", board);
    if let Some(winner) = check_end(&board) {
      return winner;
    }
    "Pending".to_owned()
  }
}

#[test]
fn test() {
  let moves = vec_of_vec![
    [2, 0],
    [1, 1],
    [0, 2],
    [2, 1],
    [1, 2],
    [1, 0],
    [0, 0],
    [0, 1]
  ];
  assert_eq!(Solution::tictactoe(moves), "B".to_owned());

  let moves = vec_of_vec![[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]];
  assert_eq!(Solution::tictactoe(moves), "A".to_owned());

  let moves = vec_of_vec![[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
  assert_eq!(Solution::tictactoe(moves), "B".to_owned());

  let moves = vec_of_vec![
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2]
  ];
  assert_eq!(Solution::tictactoe(moves), "Draw".to_owned());

  let moves = vec_of_vec![[0, 0], [1, 1]];
  assert_eq!(Solution::tictactoe(moves), "Pending".to_owned());
}
