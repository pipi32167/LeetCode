use std::collections::HashMap;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_black_pixel(pic: Vec<Vec<char>>, n: i32) -> i32 {
    // println!("find_black_pixel: \n{:?}", pic);
    let mut rows = vec![];
    let mut cols = vec![];
    for i in 0..pic.len() {
      let mut len = 0;
      for j in 0..pic[0].len() {
        if pic[i][j] == 'B' {
          len += 1;
        }
      }
      if len == n {
        rows.push(i);
      }
    }

    for j in 0..pic[0].len() {
      let mut len = 0;
      for i in 0..pic.len() {
        if pic[i][j] == 'B' {
          len += 1;
        }
      }
      if len == n {
        cols.push(j);
      }
    }

    if rows.len() == 0 || cols.len() == 0 {
      return 0;
    }
    
    // println!("rows: {:?}", rows);
    // println!("cols: {:?}", cols);
    let mut cnt = 0;
    let ss: Vec<String> = pic
      .clone()
      .into_iter()
      .map(|x| String::from_iter(x))
      .collect();

    let map: HashMap<String, i32> = ss
      .iter()
      .fold(HashMap::new(), |mut acc, x| {
        let entry = acc.entry(x.clone()).or_insert(0);
        *entry += 1;
        acc
      });
    // println!("{:?}", map);
    for j in cols {
      for &i in &rows {
        if pic[i][j] != 'B' {
          continue;
        }
        let cnt2 = map.get(&ss[i]).unwrap_or(&0);
        // println!("{}, {}, {:?}", cnt2, i, ss[i]);
        if cnt2 == &n {
          cnt += 1;
        }
      }
    }
    cnt
  }

}

#[test]
fn test() {
  let pic = vec_of_vec![['W', 'W', 'B'], ['W', 'W', 'B'], ['W', 'W', 'B']];
  assert_eq!(Solution::find_black_pixel(pic, 1), 0);

  let pic = vec_of_vec![
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['W', 'W', 'B', 'W', 'B', 'W']
  ];
  assert_eq!(Solution::find_black_pixel(pic, 3), 6);

  let pic = vec_of_vec![
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B'],
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B'],
    ['W', 'W', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B']
  ];
  assert_eq!(Solution::find_black_pixel(pic, 3), 9);

  let pic = vec_of_vec![
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B'],
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B'],
    ['W', 'B', 'W', 'B', 'B', 'W'],
    ['B', 'W', 'B', 'W', 'W', 'B']
  ];
  assert_eq!(Solution::find_black_pixel(pic, 3), 18);

  let pic = vec_of_vec![
    ['W', 'B', 'B', 'W', 'W', 'B', 'W', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'W'],
    ['W', 'B', 'B', 'W', 'W', 'B', 'W', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'B', 'B', 'B', 'W', 'B', 'W', 'W', 'W', 'W', 'B'],
    ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'B', 'W', 'W'],
    ['W', 'B', 'B', 'W', 'W', 'B', 'W', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'W'],
    ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'B', 'W', 'W'],
    ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'B', 'W', 'W'],
    ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'W', 'W', 'B', 'B', 'W', 'B', 'W', 'W']
  ];
  assert_eq!(Solution::find_black_pixel(pic, 5), 0);
}
