mod problem_1124 {
  // use std::thread::sleep_ms;
  fn tired_day(hour: i32) -> i32 {
      if hour > 8 { 1 } else { -1 }
  }
  pub fn longest_wpi(hours: Vec<i32>) -> i32 {
    
    let mut dp1 = vec![0; hours.len()];
    let mut dp2 = vec![0; hours.len()];
    dp1[0] = tired_day(hours[0]);
    dp2[0] = tired_day(hours[0]);
    for i in 1..hours.len() {
        dp1[i] = tired_day(hours[i]);
        dp2[i] = dp2[i - 1] + dp1[i];
    }
    
    // println!("dp1: {:?}", dp1);
    // println!("dp2: {:?}", dp2);
    let mut max = 0;
    for i in 0..hours.len() {
        for j in (i..hours.len()).rev() {
          // println!("i:{:?}, j:{:?}", i, j);
          let len = j - i + 1;
          if max >= len {
              break
          }
          if dp2[j] - dp2[i] + dp1[i] > 0 {
              max = len;
              break
          }
        }
    }
    max as i32
  }
}

#[test]
fn test_beautiful_array() {
  assert_eq!(problem_1124::longest_wpi(vec![9, 9, 6, 0, 6, 6, 9]), 3);
  assert_eq!(problem_1124::longest_wpi(vec![9,9,6,0,6,6,9,9,9,9,0,0]), 11);
  // assert_eq!(problem_1124::longest_wpi(vec![]));
}
