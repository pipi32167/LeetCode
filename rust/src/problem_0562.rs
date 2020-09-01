#[derive(Debug)]
struct Solution {}

impl Solution {
  fn find_longest_line(m: &Vec<Vec<i32>>, starts: Vec<(i32, i32)>, step: (i32, i32)) -> i32 {
    let mut len;
    let mut max_len = 0;
    for (mut i, mut j) in starts {
      // println!("start: ({}, {})", i, j);
      len = 0;
      while i >= 0 && i < m.len() as i32 && j >= 0 && j < m[0].len() as i32 {
        // println!("({}, {})", i, j);
        if m[i as usize][j as usize] == 0 {
          len = 0;
        } else {
          len += 1;
          max_len = max_len.max(len);
        }
        i += step.0;
        j += step.1;
      }
      // println!("end:   ({}, {})", i, j);
    }
    max_len
  }

  fn find_horizontal_longest_line(m: &Vec<Vec<i32>>) -> i32 {
    let step = (0, 1);
    let starts = (0..m.len()).map(|x| (x as i32, 0)).collect();
    Self::find_longest_line(&m, starts, step)
  }
  fn find_vertical_longest_line(m: &Vec<Vec<i32>>) -> i32 {
    let step = (1, 0);
    let starts = (0..m[0].len()).map(|x| (0, x as i32)).collect();
    Self::find_longest_line(&m, starts, step)
  }

  fn find_diagonal_longest_line(m: &Vec<Vec<i32>>) -> i32 {
    let step = (1, 1);
    let mut starts: Vec<(i32, i32)> = (0..m[0].len()).map(|x| (0, x as i32)).collect();
    starts.append(&mut (1..m.len()).map(|x| (x as i32, 0)).collect());
    Self::find_longest_line(&m, starts, step)
  }

  fn find_back_diagonal_longest_line(m: &Vec<Vec<i32>>) -> i32 {
    let step = (-1, 1);
    let mut starts: Vec<(i32, i32)> = (0..m[0].len())
      .map(|x| ((m.len() - 1) as i32, x as i32))
      .collect();
    starts.append(&mut (0..m.len()-1).map(|x| (x as i32, 0)).collect());
    Self::find_longest_line(&m, starts, step)
  }

  pub fn longest_line(m: Vec<Vec<i32>>) -> i32 {
    // println!("longest_line: {:?}", m);
    if m.len() == 0 || m[0].len() == 0 {
      return 0;
    }
    *[
      Self::find_horizontal_longest_line(&m),
      Self::find_vertical_longest_line(&m),
      Self::find_diagonal_longest_line(&m),
      Self::find_back_diagonal_longest_line(&m),
    ]
    .iter()
    .max()
    .unwrap()
  }
}

#[test]
fn test() {
  let m = vec_of_vec![];
  assert_eq!(Solution::longest_line(m), 0);

  let m = vec_of_vec![
    [0, 1, 1, 1], 
    [0, 0, 0, 0], 
    [0, 0, 0, 1]
  ];
  assert_eq!(Solution::longest_line(m), 3);

  let m = vec_of_vec![
    [0, 1, 0, 1], 
    [0, 0, 0, 1], 
    [0, 0, 0, 1]
  ];
  assert_eq!(Solution::longest_line(m), 3);

  let m = vec_of_vec![
    [0, 1, 1, 0], 
    [0, 1, 1, 0], 
    [0, 0, 0, 1]
  ];
  assert_eq!(Solution::longest_line(m), 3);
  
  let m = vec_of_vec![
    [0, 1, 1, 0], 
    [0, 1, 1, 0], 
    [1, 0, 0, 0]
  ];
  assert_eq!(Solution::longest_line(m), 3);
}
