

struct CQueue {

  stack1: Vec<i32>,
  stack2: Vec<i32>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl CQueue {

    fn new() -> Self {
      Self {
        stack1: vec![],
        stack2: vec![],
      }
    }
    
    fn append_tail(&mut self, value: i32) {
      self.stack1.push(value);
    }
    
    fn delete_head(&mut self) -> i32 {
      if self.stack1.len() == 0 {
        return -1;
      }
      while !self.stack1.is_empty() {
        self.stack2.push(self.stack1.pop().unwrap());
      }
      let ret = self.stack2.pop().unwrap();
      while !self.stack2.is_empty() {
        self.stack1.push(self.stack2.pop().unwrap());
      }

      ret
    }
}