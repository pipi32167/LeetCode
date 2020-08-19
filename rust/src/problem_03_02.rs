
#[derive(Debug)]
struct MinStack {
  data: Vec<i32>,
  min_data: Vec<i32>,
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
        min_data: vec![],
      }
    }
    
    fn push(&mut self, x: i32) {
      self.data.push(x);
      if let Some(last) = self.min_data.last() {
        if *last >= x {
          self.min_data.push(x);
        }
      } else if self.min_data.is_empty() {
          self.min_data.push(x);
      }
    }
    
    fn pop(&mut self) {
      if let Some(x) = self.data.pop() {
        if let Some(last) = self.min_data.last() {
          if x == *last {
            self.min_data.pop();
          }
        }   
      }
    }
    
    fn top(&self) -> i32 {
      if let Some(ret) = self.data.last() {
        *ret
      } else {
        -1
      }
    }
    
    fn get_min(&self) -> i32 {
      if let Some(ret) = self.min_data.last() {
        *ret
      } else {
        -1
      }
    }
}


#[test]
fn test_min_stack() {
  let mut min_stack = MinStack::new();
  min_stack.push(-2);
  min_stack.push(0);
  min_stack.push(-3);
  println!("{:?}", min_stack);
  assert_eq!(min_stack.get_min(), -3);
  min_stack.pop();
  assert_eq!(min_stack.top(), 0);
  assert_eq!(min_stack.get_min(), -2);
}