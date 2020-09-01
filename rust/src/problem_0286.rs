use std::i32;

#[derive(Debug)]
struct Solution {}

impl Solution {

  fn try_tag_room(rooms: &mut Vec<Vec<i32>>, i: usize, j: usize, v: i32) -> bool {
    
    let dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)];
    let mut hit = false;
    for dir in dirs.iter() {
      let i2 = i as i32 + dir.0;
      let j2 = j as i32 + dir.1;
      if i2 < 0 || i2 >= rooms.len() as i32 || j2 < 0 || j2 >= rooms[0].len() as i32 {
        continue;
      }
      if rooms[i2 as usize][j2 as usize] == i32::MAX {
        hit = true;
        rooms[i2 as usize][j2 as usize] = v + 1;
      }
    }
    hit
  }

  pub fn walls_and_gates(rooms: &mut Vec<Vec<i32>>) {

    let mut hit = true;
    let mut v = 0;
    while hit {
      hit = false;
      for i in 0..rooms.len() {
        for j in 0..rooms[0].len() {
          if rooms[i][j] == v && Self::try_tag_room(rooms, i, j, v) {
            hit = true
          }
        }
      }
      v += 1;
      // println!("{}, {:?}", v, rooms);
    }
  }
}

#[test]
fn test() {
  const MAX: i32 = i32::MAX;
  let mut rooms = vec_of_vec![
    [MAX, -1, 0, MAX],
    [MAX, MAX, MAX, -1],
    [MAX, -1, MAX, -1],
    [0, -1, MAX, MAX]
  ];
  let expect = vec_of_vec![
    [3,  -1,   0,   1],
    [2,   2,   1,  -1],
    [1,  -1,   2,  -1],
    [0,  -1,   3,   4]
  ];

  Solution::walls_and_gates(&mut rooms);
  assert_eq!(rooms, expect);
}
