use std::i32;

fn next(maze: &Vec<Vec<i32>>, start: &(i32, i32), step: &(i32, i32)) -> (i32, i32) {
    
  let mut i = start.0;
  let mut j = start.1;
  while i >= 0 && i < maze.len() as i32 && j >= 0 && j < maze[0].len() as i32 {
    if maze[i as usize][j as usize] == 1 {
      break;
    }
    i += step.0;
    j += step.1;
  } 

  i -= step.0;
  j -= step.1;

  // println!("next: start: {:?}, step: {:?}, dest: {:?}", start, step, (i, j));
  assert!(i >= 0 && i < maze.len() as i32 && j >= 0 && j < maze[0].len() as i32);
  (i, j)
}

fn distance(start: &(i32, i32), dest: &(i32, i32)) -> i32 {
  (start.0 - dest.0).abs() + (start.1 - dest.1).abs() 
}

#[derive(Debug)]
struct Solution {}

impl Solution {

  fn dfs(maze: &Vec<Vec<i32>>, dist: &mut Vec<Vec<i32>>, start: &(i32, i32), dest: &(i32, i32), len: i32) {
    
    if dist[start.0 as usize][start.1 as usize] <= len {
      return;
    }

    if dist[start.0 as usize][start.1 as usize] > len {
      dist[start.0 as usize][start.1 as usize] = len;
    }

    if start == dest {
      return;
    }
    
    let steps = [
      (1, 0),   //down
      (-1, 0),  //up
      (0, 1),   //right
      (0, -1),  //left
    ];
    for step in steps.iter() {
      let next_start = next(maze, start, step);
      let next_len = distance(&start, &next_start);
      Self::dfs(maze, dist, &next_start, &dest, len + next_len);
    }
  }

  pub fn solve0(maze: Vec<Vec<i32>>, start: Vec<i32>, dest: Vec<i32>) -> i32 {

    let start = (start[0], start[1]);
    let dest = (dest[0], dest[1]);
    let mut dist = vec![vec![i32::MAX; maze[0].len()]; maze.len()];
    Self::dfs(&maze, &mut dist, &start, &dest, 0);
    // println!("{:?}", dist);
    let ret = dist[dest.0 as usize][dest.1 as usize];
    if ret == i32::MAX { -1 } else { ret }
  }


  pub fn solve1(maze: Vec<Vec<i32>>, start: Vec<i32>, dest: Vec<i32>) -> i32 {
    use std::collections::VecDeque;

    let start = (start[0], start[1]);
    let dest = (dest[0], dest[1]);
    let mut dist = vec![vec![i32::MAX; maze[0].len()]; maze.len()];
    dist[start.0 as usize][start.1 as usize] = 0;
    let steps = [(1, 0), (-1, 0), (0, 1), (0, -1)];
    let mut queue: VecDeque<(i32, i32)> = VecDeque::new();
    queue.push_back(start);
    while !queue.is_empty() {
      let start = queue.pop_front().unwrap();
      if start == dest {
        continue;
      }
      for step in steps.iter() {
        let next_start = next(&maze, &start, &step);
        let len = dist[start.0 as usize][start.1 as usize] + distance(&start, &next_start); 
        let len2 = dist[next_start.0 as usize][next_start.1 as usize];
        if len2 <= len {
          continue;
        }
        dist[next_start.0 as usize][next_start.1 as usize] = len;
        queue.push_back(next_start);
      }
    }
    let ret = dist[dest.0 as usize][dest.1 as usize];
    if ret == i32::MAX { -1 } else { ret }
  }

  fn solve2(maze: Vec<Vec<i32>>, start: Vec<i32>, dest: Vec<i32>) -> i32 {
    use std::collections::BinaryHeap;
    use std::cmp::Ordering;
    
    #[derive(Copy, Clone, Eq, PartialEq, PartialOrd)]
    struct State {
        cost: i32,
        position: (i32, i32),
    };
    
    impl Ord for State {
      fn cmp(&self, other: &State) -> Ordering {
        self.cost.cmp(&other.cost)
          .then_with(|| self.position.cmp(&other.position))
      }
    }

    let start = (start[0], start[1]);
    let dest = (dest[0], dest[1]);
    let mut dist = vec![vec![i32::MAX; maze[0].len()]; maze.len()];
    dist[start.0 as usize][start.1 as usize] = 0;
    let steps = [(1, 0), (-1, 0), (0, 1), (0, -1)];
    let mut heap = BinaryHeap::new();
    heap.push(State { cost: 0, position: start });
    while let Some(state) = heap.pop() {
      if state.position == dest {
        continue;
      }
      let start = &state.position;
      for step in steps.iter() {
        let next_start = next(&maze, &start, &step);
        let len = dist[start.0 as usize][start.1 as usize] + distance(&start, &next_start); 
        let len2 = dist[next_start.0 as usize][next_start.1 as usize];
        if len2 <= len {
          continue;
        }
        dist[next_start.0 as usize][next_start.1 as usize] = len;
        heap.push(State { cost: len, position: next_start });
      }
    }

    let ret = dist[dest.0 as usize][dest.1 as usize];
    if ret == i32::MAX { -1 } else { ret }
  }


  pub fn shortest_distance(maze: Vec<Vec<i32>>, start: Vec<i32>, dest: Vec<i32>) -> i32 {
    Self::solve2(maze, start, dest)
  }
}


#[test]
fn test_next() {
  
  let maze = vec_of_vec![
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  let start = (0, 0);
  let step = (1, 0);
  let expect = (2, 0);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (-1, 0);
  let expect = (0, 0);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (0, 1);
  let expect = (0, 2);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (0, -1);
  let expect = (0, 0);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);

  let maze = vec_of_vec![
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  let start = (1, 1);
  let step = (1, 0);
  let expect = (1, 1);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (-1, 0);
  let expect = (1, 1);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (0, 1);
  let expect = (1, 1);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  let step = (0, -1);
  let expect = (1, 1);
  let actual = next(&maze, &start, &step);
  assert_eq!(actual, expect);
  
}

#[test]
fn test() {
  let maze = vec_of_vec![
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0]
  ];
  let start = vec![0, 0];
  let dest = vec![1, 2];
  assert_eq!(Solution::shortest_distance(maze, start, dest), 13);
  
  let maze = vec_of_vec![
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
  ];
  let start = vec![0, 4];
  let dest = vec![4, 4];
  assert_eq!(Solution::shortest_distance(maze, start, dest), 12);

  let maze = vec_of_vec![
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0]
  ];
  let start = vec![0, 0];
  let dest = vec![2, 2];
  assert_eq!(Solution::shortest_distance(maze, start, dest), 4);

  let maze = vec_of_vec![
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ];
  let start = vec![0, 0];
  let dest = vec![2, 2];
  assert_eq!(Solution::shortest_distance(maze, start, dest), -1);

  let maze = vec_of_vec![
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  let start = vec![0, 0];
  let dest = vec![0, 2];
  assert_eq!(Solution::shortest_distance(maze, start, dest), 6);


  let maze = vec_of_vec![[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1],[0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1],[0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1],[0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0],[0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0],[0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1],[0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0],[1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0],[1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0],[0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],[0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],[0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0],[0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0],[1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1],[0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0],[1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0],[1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0],[0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1],[0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1],[1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0],[0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0],[0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1],[1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1],[0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0],[0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0],[0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],[0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0],[0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0],[1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0],[1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0],[1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1],[1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1],[0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0],[0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1],[0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],[1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0],[1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0],[1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0],[0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0],[1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0],[0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1],[1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0],[0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1],[1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0],[1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0],[0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1],[1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0],[0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0],[0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0],[0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1],[0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0],[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0],[0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0],[0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1],[0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1],[1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1],[0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0],[0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0],[1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0],[0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0],[0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0],[0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1],[1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1],[0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],[0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0],[1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0],[1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]];
  let start = vec![37,88];
  let dest = vec![60,33];
  assert_eq!(Solution::shortest_distance(maze, start, dest), 192);
}