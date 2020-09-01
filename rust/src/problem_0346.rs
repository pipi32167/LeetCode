use std::collections::VecDeque;

struct MovingAverage {
  size: i32,
  sum: i32,
  data: VecDeque<i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MovingAverage {

    /** Initialize your data structure here. */
    fn new(size: i32) -> Self {
      Self {
        sum: 0,
        size: size,
        data: VecDeque::new(),
      }
    }
    
    fn next(&mut self, val: i32) -> f64 {
      self.data.push_back(val);
      self.sum += val;
      if self.data.len() as i32 > self.size {
        self.sum -= self.data.pop_front().unwrap();
      }

      self.sum as f64 / self.size.min(self.data.len() as i32) as f64
    }
}


#[test]
fn test() {
  
  let mut obj = MovingAverage::new(3);
  assert_eq!(obj.next(1), 1_f64);
  assert_eq!(obj.next(10), 5.5);
  assert_eq!(obj.next(3), 14_f64 / 3_f64);
  assert_eq!(obj.next(5), 6_f64);
}