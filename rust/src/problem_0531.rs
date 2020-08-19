#[derive(Debug)]
struct Solution {}

impl Solution {
  fn is_lonely(pic: &Vec<Vec<char>>, i0: usize, j0: usize) -> bool {
    let mut cnt = 0;
    for i in 0..pic.len() {
      if pic[i][j0] == 'B' {
        cnt += 1;
      }
    }
    for j in 0..pic[0].len() {
      if j != j0 && pic[i0][j] == 'B' {
        cnt += 1;
      }
    }
    // println!("({}, {}): {}, {}", i0, j0, pic[i0][j0], cnt);
    cnt == 1
  }
  pub fn find_lonely_pixel(picture: Vec<Vec<char>>) -> i32 {
    use std::collections::HashSet;
    let mut lonely_cols = HashSet::new();
    let mut cnt = 0;
    for i in 0..picture.len() {
      for j in 0..picture[0].len() {
        if lonely_cols.contains(&j) {
          continue;
        }
        if picture[i][j] == 'B' && Self::is_lonely(&picture, i, j) {
          cnt += 1;
          lonely_cols.insert(j);
          break;
        }
      }
    }
    cnt
  }
}

#[test]
fn test() {
  let pic = vec_of_vec![
    ['W', 'W', 'B'], 
    ['W', 'B', 'W'], 
    ['B', 'W', 'W']
  ];
  assert_eq!(Solution::find_lonely_pixel(pic), 3);
  let pic = vec_of_vec![
    ['B', 'B', 'B'], 
    ['B', 'B', 'B'], 
    ['B', 'B', 'B']
  ];
  assert_eq!(Solution::find_lonely_pixel(pic), 0);
  let mut pic: Vec<Vec<char>> = vec![];
  for i in 0..500 {
    pic.push(vec![]);
    for _j in 0..500 {
      pic[i].push('W');
    }
  }
  assert_eq!(Solution::find_lonely_pixel(pic), 0);
}
