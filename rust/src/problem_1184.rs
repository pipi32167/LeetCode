#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn distance_between_bus_stops(distance: Vec<i32>, start: i32, destination: i32) -> i32 {
    if start == destination {
      return 0;
    }
    let (start, dest) = if start < destination {
      (start, destination)
    } else {
      (destination, start)
    };
    let ret1: i32 = distance
      .iter()
      .skip(start as usize)
      .take((dest - start) as usize)
      .sum();
    let ret2: i32 = distance
      .iter()
      .cycle()
      .skip(dest as usize)
      .take(distance.len() - (dest - start) as usize)
      .sum();

    // println!("{}, {}", ret1, ret2);
    ret1.min(ret2)
  }
}

#[test]
fn test() {
  let distance = vec![1, 2, 3, 4];
  let start = 0;
  let destination = 1;
  assert_eq!(
    Solution::distance_between_bus_stops(distance, start, destination),
    1
  );
  let distance = vec![1, 2, 3, 4];
  let start = 0;
  let destination = 2;
  assert_eq!(
    Solution::distance_between_bus_stops(distance, start, destination),
    3
  );
  let distance = vec![1, 2, 3, 4];
  let start = 0;
  let destination = 3;
  assert_eq!(
    Solution::distance_between_bus_stops(distance, start, destination),
    4
  );
}
