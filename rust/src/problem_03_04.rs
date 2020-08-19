struct MyQueue {
  data1: Vec<i32>,
  data2: Vec<i32>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyQueue {

    /** Initialize your data structure here. */
    fn new() -> Self {
      Self {
        data1: vec![],
        data2: vec![],
      }
    }
    
    /** Push element x to the back of queue. */
    fn push(&mut self, x: i32) {
      while let Some(x) = self.data2.pop() {
        self.data1.push(x);
      }
      self.data1.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    fn pop(&mut self) -> i32 {
      while let Some(x) = self.data1.pop() {
        self.data2.push(x);
      }
      self.data2.pop().unwrap()
    }
    
    /** Get the front element. */
    fn peek(&mut self) -> i32 {
      while let Some(x) = self.data1.pop() {
        self.data2.push(x);
      }
      *self.data2.last().unwrap()
    }
    
    /** Returns whether the queue is empty. */
    fn empty(&self) -> bool {
      self.data1.is_empty() && self.data2.is_empty()
    }
}

#[test]
fn test_my_queue() {
  let mut queue = MyQueue::new();
  queue.push(1);
  queue.push(2);
  assert_eq!(queue.peek(), 1);
  assert_eq!(queue.pop(), 1);
  assert!(!queue.empty());
  assert_eq!(queue.pop(), 2);
  assert!(queue.empty());
}