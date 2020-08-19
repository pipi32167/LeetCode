use std::cmp::Ordering;

#[derive(Debug)]
struct Solution {}

type Interval = Vec<i32>;
type Room = Vec<Interval>;

impl Solution {
  pub fn min_meeting_rooms(mut intervals: Vec<Vec<i32>>) -> i32 {
    intervals.sort_by(|a, b| {
      let ret = a[0].cmp(&b[0]);
      if ret == Ordering::Equal {
        b[1].cmp(&a[1])
      } else {
        ret
      }
    });

    let can_use = |room: &Room, interval: &Interval| {
      for booking in room {
        if booking[0] <= interval[0] && booking[1] > interval[0]
          || interval[0] <= booking[0] && interval[1] > booking[0]
        {
          return false;
        }
      }
      true
    };

    let mut rooms: Vec<Vec<Vec<i32>>> = vec![];
    for i in intervals {
      let mut hit = false;
      for room in &mut rooms {
        if can_use(&room, &i) {
          room.push(i.clone());
          hit = true;
          break;
        }
      }
      if !hit {
        rooms.push(vec![i]);
      }
    }

    // println!("{:?}", rooms);
    rooms.len() as i32
  }
}

#[test]
fn test() {
  let intervals = vec_of_vec![[0, 30], [5, 10], [15, 20]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[7, 10], [2, 4]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 1);
  let intervals = vec_of_vec![[1, 10], [10, 15]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 1);
  let intervals = vec_of_vec![[1, 10], [9, 15]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[9, 10], [1, 9]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 1);
  let intervals = vec_of_vec![[8, 10], [1, 9]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[1, 10], [1, 9]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[1, 9], [1, 10]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[1, 3], [2, 4], [4, 6], [5, 7]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
  let intervals = vec_of_vec![[1, 3], [2, 4], [3, 5], [4, 6]];
  assert_eq!(Solution::min_meeting_rooms(intervals), 2);
}
