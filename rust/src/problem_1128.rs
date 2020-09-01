use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn num_equiv_domino_pairs(dominoes: Vec<Vec<i32>>) -> i32 {
    let mut map: HashMap<(i32, i32), i32> = HashMap::new();
    for i in 0..dominoes.len() {
      let a = dominoes[i][0];
      let b = dominoes[i][1];
      let k = if a < b { (a, b) } else { (b, a) };
      let entry = map.entry(k).or_insert(0);
      *entry += 1;
    }

    // println!("{:?}", map);
    map.values().fold(
      0,
      |acc, &x| {
        if x == 1 {
          acc
        } else {
          acc + (x - 1) * x / 2
        }
      },
    )
  }
}

#[test]
fn test() {
  let dominoes = vec_of_vec![[1, 2], [2, 1], [3, 4], [5, 6]];
  assert_eq!(Solution::num_equiv_domino_pairs(dominoes), 1);
  let dominoes = vec_of_vec![[1, 2], [2, 1], [2, 1], [3, 4], [5, 6]];
  assert_eq!(Solution::num_equiv_domino_pairs(dominoes), 3);
}
