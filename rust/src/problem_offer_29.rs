

#[derive(Debug)]
struct Solution {}

impl Solution {

    fn solve(matrix: &Vec<Vec<i32>>, left_top: (i32, i32), right_bottom: (i32, i32)) -> Vec<i32> {
      let (x0, y0) = left_top;
      let (x1, y1) = right_bottom;
      println!("{:?}, {:?}", left_top, right_bottom);
      if x0 > x1 || y0 > y1 {
        return vec![];
      }

      let mut ret = vec![];

      if x0 == x1 {
        for i in y0..=y1 {
          ret.push(matrix[y0 as usize][i as usize]);
        }
        return ret;
      }

      if y0 == y1 {
        for i in x0..=x1 {
          ret.push(matrix[i as usize][y0 as usize]);
        }
        return ret;
      } 

      for i in y0..y1 {
        ret.push(matrix[x0 as usize][i as usize]);
      }
      println!("{:?}", ret);
      for i in x0..x1 {
        ret.push(matrix[i as usize][y1 as usize]);
      }
      println!("{:?}", ret);
      for i in (y0+1..=y1).rev() {
        ret.push(matrix[x1 as usize][i as usize]);
      }
      println!("{:?}", ret);
      for i in (x0+1..=x1).rev() {
        ret.push(matrix[i as usize][y0 as usize]);
      }
      println!("{:?}", ret);
      
      [ret, Self::solve(matrix, (x0 + 1, y0 + 1), (x1 - 1, y1 - 1))].concat()
    }
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
      if matrix.len() == 0 || matrix[0].len() == 0 {
        return vec![];
      }
      let m = matrix.len() as i32;
      let n = matrix[0].len() as i32;
      Self::solve(&matrix, (0, 0), (m - 1, n - 1))
    }
}

#[test]
fn test_spiral_order() {
  let matrix = vec![vec![1,2,3],vec![4,5,6],vec![7,8,9]];
  let result = vec![1,2,3,6,9,8,7,4,5];
  assert_eq!(Solution::spiral_order(matrix), result);
  let matrix = vec![vec![1,2,3]];
  let result = vec![1,2,3];
  assert_eq!(Solution::spiral_order(matrix), result);
  let matrix = vec![vec![1],vec![2],vec![3]];
  let result = vec![1,2,3];
  assert_eq!(Solution::spiral_order(matrix), result);
  let matrix = vec![vec![1,2,3],vec![4,5,6]];
  let result = vec![1,2,3,6,5,4];
  assert_eq!(Solution::spiral_order(matrix), result);
  let matrix = vec![vec![1,2],vec![3,4],vec![5,6]];
  let result = vec![1,2,4,6,5,3];
  assert_eq!(Solution::spiral_order(matrix), result);
}