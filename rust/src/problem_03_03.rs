#[derive(Debug)]
struct StackOfPlates {
  data: Vec<Vec<i32>>,
  cap: usize,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StackOfPlates {

    fn new(cap: i32) -> Self {
      Self {
        data: vec![],
        cap: cap as usize,
      }
    }
    
    fn push(&mut self, val: i32) {
      if self.cap == 0 {
        return;
      }
      if let Some(stack) = self.data.last_mut() {
        if stack.len() < self.cap {
          stack.push(val)
        } else {
          self.data.push(vec![val]);
        }
      } else {
        self.data.push(vec![val]);
      }
    }
    
    fn pop(&mut self) -> i32 {
      if self.cap == 0 {
        return -1;
      }

      if let Some(stack) = self.data.last_mut() {
        if let Some(x) = stack.pop() {
          if stack.is_empty() {
            self.data.pop();
          }
          x
        } else {
          -1
        }
      } else {
        -1
      }
    }
    
    fn pop_at(&mut self, index: i32) -> i32 {
      if self.cap == 0 || index < 0 || index as usize >= self.data.len() {
        return -1;
      }

      let index = index as usize;
      
      let stack = &mut self.data[index];
      if let Some(x) = stack.pop() {
        if stack.is_empty() {
          let mut tmp: Vec<Vec<i32>> = Vec::new();
          while let Some(stack2) = self.data.pop() {
            if stack2.is_empty() {
              break;
            }
            tmp.push(stack2);
          }
          while let Some(stack2) = tmp.pop() {
            self.data.push(stack2);
          }
        }
        x
      } else {
        -1
      }
    }
}

#[test]
fn test_min_stack() {
  let mut stack = StackOfPlates::new(1);
  stack.push(1);
  stack.push(2);
  println!("{:?}", stack);
  assert_eq!(stack.pop_at(1), 2);
  assert_eq!(stack.pop(), 1);
  assert_eq!(stack.pop(), -1);
  let mut stack = StackOfPlates::new(2);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  println!("{:?}", stack);
  assert_eq!(stack.pop_at(0), 2);
  assert_eq!(stack.pop_at(0), 1);
  assert_eq!(stack.pop_at(0), 3);
}