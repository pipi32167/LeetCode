#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn max_distance(arrays: Vec<Vec<i32>>) -> i32 {
    use std::i32;

    let mut mins = vec![];
    let mut maxs = vec![];
    for i in arrays {
      mins.push(i.iter().min().unwrap().clone());
      maxs.push(i.iter().max().unwrap().clone());
    }

    let mut max_dist = i32::MIN;
    for (i, &min) in mins.iter().enumerate() {
      for (j, &max) in maxs.iter().enumerate() {
        if i == j {
          continue;
        }
        let dist = (max - min).abs();
        if max_dist < dist {
          max_dist = dist;
        }
        // max_dist = max_dist.max((max - min).abs());
      }
    }
    max_dist
  }
}

#[test]
fn test() {
  let arrays = vec_of_vec![[1, 2, 3], [4, 5], [1, 2, 3]];
  assert_eq!(Solution::max_distance(arrays), 4);
  let arrays = vec_of_vec![[1, 4], [0, 5]];
  assert_eq!(Solution::max_distance(arrays), 4);
  let arrays = vec![vec![0; 10000]; 1000];
  assert_eq!(Solution::max_distance(arrays), 0);
}
