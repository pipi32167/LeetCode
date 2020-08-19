#[derive(Debug)]
struct Solution {}

impl Solution {
  fn is_intersect(t1: &Vec<i32>, t2: &Vec<i32>) -> bool {
    
    let (start1, end1) = (t1[0], t1[1]);
    let (start2, end2) = (t2[0], t2[1]);
    if start1 <= start2 && end1 > start2 {
      return true;
    } else if start2 <= start1 && end2 > start1 {
      return true;
    }
    false
  }

  pub fn can_attend_meetings(intervals: Vec<Vec<i32>>) -> bool {
    for i in 0..intervals.len() {
      for j in i + 1..intervals.len() {
        if Self::is_intersect(&intervals[i], &intervals[j]) {
          return false;
        }
      }
    }
    true
  }
}

#[test]
fn test() {
  let intervals = vec_of_vec![[0, 30], [5, 10], [15, 20]];
  assert!(!Solution::can_attend_meetings(intervals));
  let intervals = vec_of_vec![[7, 10], [2, 4]];
  assert!(Solution::can_attend_meetings(intervals));
  let intervals = vec_of_vec![[0, 30], [30, 40], [40, 50]];
  assert!(Solution::can_attend_meetings(intervals));
  let intervals = vec_of_vec![[8,11],[17,20],[17,20]];
  assert!(!Solution::can_attend_meetings(intervals));

}
