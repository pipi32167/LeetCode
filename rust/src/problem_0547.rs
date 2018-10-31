mod problem_0547 {

  fn merge(circles: Vec<(usize, usize)>) -> Vec<Vec<usize>> {
    let result: Vec<Vec<usize>>;
    let circles2: Vec<Vec<usize>> = vec![];
    let hit: bool = true;
    while hit {
      let mut hits: Vec<bool> = vec![];
      hits.resize_default(circles.len());
      for i in 0..circles.len() {
        
      }

      hit = result.len() != circles.len();
      circles = result
    }
    result
  }

  pub fn find_circle_num(matrix: Vec<Vec<u8>>) -> usize {
    let len = matrix.len();
    if len == 0 {
      return 0;
    }

    let mut circles: Vec<Vec<usize>> = vec![];
    for i in 0..len {
      let mut v: Vec<usize> = vec![];
      for j in i..len {
        if matrix[i][j] == 1 {
          v.push((i, j))
        }
      }
      circles.push(v);
    }

    let result: Vec<Vec<usize>> = merge(circles);
    result.len()
  }
}

#[test]
fn test_max_count() {
  fn make_friendships(m: u8, ops: Vec<(usize, usize)>) -> Vec<Vec<u8>> {
    let mut res: Vec<Vec<u8>> = vec![];

    for _i in 0..m {
      let mut v: Vec<u8> = vec![];
      for _j in 0..m {
        v.push(0)
      }
      res.push(v)
    }

    for op in ops {
      res[op.0][op.1] = 1;
      res[op.1][op.0] = 1;
    }
    res
  }

  // println!("make_friendships: {:?}", res);
  assert_eq!(
    problem_0547::find_circle_num(make_friendships(5, vec![(0, 1), (0, 4)])),
    3
  )
}
