
mod problem_0932 {
  // use std::thread::sleep_ms;

  pub fn beautiful_array(n: i32) -> Vec<i32> {

    // println!("beautiful_array: {:?}", n);
    if n == 1 {
      return vec![1]
    }
    if n == 2 {
      return vec![1,2]
    }
    if n == 3 {
      return vec![1,3,2]
    }
    let mut arr: Vec<i32> = vec![1,3,2,4];
    while arr.len() < (n as usize) {
      // println!("{:?}", arr);
        
      let len = arr.len();
      for i in 0..len {
          arr[i] = arr[i] * 2 - 1;
          arr.push(arr[i] + 1);
      }

      // println!("{:?}", arr);
      // sleep_ms(1000);
      arr = arr.into_iter().filter(|e| *e <= n).collect();
    }
    return arr;
  }
}

fn is_beautiful(arr: Vec<i32>) -> bool {

  // println!("is_beautiful: {:?}", arr);
  
  for k in 1..(arr.len()-1) {
      for i in 0..k {
          for j in (k+1)..arr.len() {
              if arr[k] * 2 == arr[i] + arr[j] {
                return false
              }
          }
      }
  }
  return true
}

#[test]
fn test_beautiful_array() {
  assert!(is_beautiful(problem_0932::beautiful_array(2)));
  assert!(is_beautiful(problem_0932::beautiful_array(10)));
  assert!(is_beautiful(problem_0932::beautiful_array(100)));
}
