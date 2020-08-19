use std::i32;

struct MinStack {
  data: Vec<i32>,
  min_val: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {
  /** initialize your data structure here. */
  fn new() -> Self {
    Self {
      data: vec![],
      min_val: i32::MAX,
    }
  }

  fn push(&mut self, x: i32) {
    self.data.push(x);
    self.min_val = self.min_val.min(x);
    // println!("push {}: {:?}, {}", x, self.data, self.min_val);
  }

  fn pop(&mut self) {
    if let Some(val) = self.data.pop() {
      if self.min_val == val {
        if self.data.len() > 0 {
          self.min_val = self.data.iter().min().unwrap().clone()
        } else {
          self.min_val = i32::MAX
        }
      }
    }
    // println!("pop: {:?}, {}", self.data, self.min_val);
  }

  fn top(&self) -> i32 {
    self.data.last().unwrap().clone()
  }

  fn min(&self) -> i32 {
    self.min_val
  }
}

#[test]
fn test_min_stack() {
  let mut stack = MinStack::new();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  assert_eq!(stack.min(), -3);
  stack.pop();
  assert_eq!(stack.top(), 0);
  assert_eq!(stack.min(), -2);

  let mut stack = MinStack::new();
  stack.push(2147483646);
  stack.push(2147483646);
  stack.push(2147483647);
  assert_eq!(stack.top(), 2147483647);
  stack.pop();
  assert_eq!(stack.min(), 2147483646);
  stack.pop();
  assert_eq!(stack.min(), 2147483646);
  stack.pop();
  stack.push(2147483647);
  assert_eq!(stack.top(), 2147483647);
  assert_eq!(stack.min(), 2147483647);
  stack.push(-2147483648);
  assert_eq!(stack.top(), -2147483648);
  assert_eq!(stack.min(), -2147483648);
  stack.pop();
  assert_eq!(stack.min(), 2147483647);
}
