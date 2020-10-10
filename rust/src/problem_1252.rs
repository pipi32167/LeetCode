#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn odd_cells(n: i32, m: i32, indices: Vec<Vec<i32>>) -> i32 {
    let (n, m) = (n as usize, m as usize);
    let mut ret = vec![vec![0; m]; n];
    for indice in &indices {
      let (i0, j0) = (indice[0] as usize, indice[1] as usize);
      for i in 0..n {
        ret[i][j0] += 1;
      }
      for j in 0..m {
        ret[i0][j] += 1;
      }
      // println!("{:?}", ret);
    }

    ret.into_iter().flatten().filter(|x| x % 2 == 1).count() as i32
  }
}

#[test]
fn test() {
  let n = 2;
  let m = 3;
  let indices = vec_of_vec![[0, 1], [1, 1]];
  assert_eq!(Solution::odd_cells(n, m, indices), 6);

  let n = 2;
  let m = 2;
  let indices = vec_of_vec![[1, 1], [0, 0]];
  assert_eq!(Solution::odd_cells(n, m, indices), 0);
}
