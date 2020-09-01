#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
    let mut tmp = vec![(0, 0); n as usize];
    for v in trust {
      tmp[(v[0] - 1) as usize].0 += 1;
      tmp[(v[1] - 1) as usize].1 += 1;
    }
    // println!("{:?}", tmp);
    for (i, e) in tmp.iter().enumerate() {
      if e.0 == 0 && e.1 == n - 1 {
        return i as i32 + 1;
      }
    }
    -1
  }
}

#[test]
fn test() {
    
  assert_eq!(Solution::find_judge(2, vec_of_vec![[1,2]]), 2);
  assert_eq!(Solution::find_judge(3, vec_of_vec![[1,3],[2,3]]), 3);
  assert_eq!(Solution::find_judge(3, vec_of_vec![[1,3],[2,3],[3,1]]), -1);
  assert_eq!(Solution::find_judge(3, vec_of_vec![[1,2],[2,3]]), -1);
  assert_eq!(Solution::find_judge(4, vec_of_vec![[1,3],[1,4],[2,3],[2,4],[4,3]]), 3);
}