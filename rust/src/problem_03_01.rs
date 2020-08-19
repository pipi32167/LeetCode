#[derive(Debug)]
struct TripleInOne {
  data: Vec<i32>,
  length: Vec<usize>,
  stack_size: usize,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TripleInOne {

    fn new(stack_size: i32) -> Self {
      let stack_size = stack_size as usize;
      if stack_size == 0 {
        Self {
          data: vec![0; 1],
          length: vec![0; 1],
          stack_size: stack_size,
        }   
      } else {

        Self {
          data: vec![0; stack_size * 3],
          length: vec![0; stack_size],
          stack_size: stack_size,
        }
      }
    }
    
    fn push(&mut self, stack_num: i32, value: i32) {
      if self.stack_size == 0  {
        return;
      }
      let stack_num = stack_num as usize;
      let len = self.length[stack_num];
      if len < self.stack_size {
        let pos = self.stack_size * stack_num + len;
        self.data[pos] = value;
        self.length[stack_num] += 1;
      }
    }
    
    fn pop(&mut self, stack_num: i32) -> i32 {
      if self.stack_size == 0  {
        return -1;
      }
      let stack_num = stack_num as usize;
      let len = self.length[stack_num];
      if len > 0 {
        let pos = self.stack_size * stack_num + len - 1;
        self.length[stack_num] -= 1;
        self.data[pos]
      } else {
        -1
      }
    }
    
    fn peek(&self, stack_num: i32) -> i32 {
      if self.stack_size == 0  {
        return -1;
      }
      let stack_num = stack_num as usize;
      let pos = self.length[stack_num];
      if pos > 0 {
        let pos = self.stack_size * stack_num + pos - 1;
        self.data[pos]
      } else {
        -1
      }
    }
    
    fn is_empty(&self, stack_num: i32) -> bool {
      self.peek(stack_num) == -1
    }
}


#[test]
fn test_triple_in_one() {
  let mut triple = TripleInOne::new(1);
  triple.push(0, 1);
  triple.push(0, 2);
  println!("{:?}", triple);
  assert_eq!(triple.pop(0), 1);
  assert_eq!(triple.pop(0), -1);
  assert_eq!(triple.pop(0), -1);
  assert!(triple.is_empty(0));

  let mut triple = TripleInOne::new(2);
  triple.push(0, 1);
  triple.push(0, 2);
  triple.push(0, 3);
  println!("{:?}", triple);
  assert_eq!(triple.pop(0), 2);
  assert_eq!(triple.pop(0), 1);
  assert_eq!(triple.pop(0), -1);
  assert!(triple.is_empty(0));

  let mut triple = TripleInOne::new(0);
  triple.is_empty(2);
  triple.pop(1);
  triple.peek(0);
  triple.push(0,10);
  triple.is_empty(1);
  triple.pop(0);
  triple.pop(0);
  triple.peek(1);
  triple.is_empty(0);
  triple.pop(2);
  triple.is_empty(1);
  triple.is_empty(2);
  triple.is_empty(0);
  triple.peek(2);
  triple.peek(1);
  triple.push(0,25);
  triple.push(2,17);
  triple.pop(0);
  triple.push(0,12);
  triple.push(0,23);
  triple.pop(1);
  triple.push(2,9);
  triple.pop(2);
  triple.peek(0);
  triple.is_empty(2);
  triple.push(2,14);
  triple.pop(1);
  triple.peek(0);
  triple.pop(2);
  triple.is_empty(1);
  triple.is_empty(0);
  triple.pop(1);
  triple.peek(2);
  triple.is_empty(1);
  triple.is_empty(2);

}