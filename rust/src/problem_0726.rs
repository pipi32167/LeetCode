
struct MaxStack {
  data: Vec<i32>,
  max_data: Vec<i32>,
}

trait Index<T> {
  fn index_of(&self, v: T) -> Option<usize>;
  fn last_index_of(&self, v: T) -> Option<usize>;
}

impl<T> Index<T> for Vec<T> 
  where T: PartialEq<T>
{
    
  fn index_of(&self, v: T) -> Option<usize> {
    self.iter().position(|x| x == &v)
  }
  
  fn last_index_of(&self, v: T) -> Option<usize> {
    if let Some(ret) = self.into_iter().enumerate().rev().find(|&(_i, x)| x == &v) {
      Some(ret.0)
    } else {
      None
    }
  }
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MaxStack {

    /** initialize your data structure here. */
    fn new() -> Self {
      Self { data: vec![], max_data: vec![] }
    }
    
    fn push(&mut self, x: i32) {
      self.data.push(x);
      if self.max_data.is_empty() {
        self.max_data.push(x);
      } else {
        self.max_data.push(x.max(*self.max_data.last().unwrap()));
      }
    }
    
    fn pop(&mut self) -> i32 {
      let ret = self.data.pop().unwrap();
      self.max_data.pop();
      ret
    }
    
    fn top(&self) -> i32 {
      *self.data.last().unwrap()
    }
    
    fn peek_max(&self) -> i32 {
      *self.max_data.last().unwrap()
    }
    
    fn pop_max(&mut self) -> i32 {
      let ret = self.max_data.last().unwrap().clone();
      let mut tmp = vec![];
      while self.top() != ret {
        tmp.push(self.pop());
      }
      self.pop();
      while !tmp.is_empty() {
        self.push(tmp.pop().unwrap());
      }
      ret
    }
}


#[test]
fn test_index_trait() {
  
  let arr = vec![1,2,5,3,1];
  assert_eq!(arr.index_of(1), Some(0));
  assert_eq!(arr.last_index_of(1), Some(4));
}

#[test]
fn test() {
  let mut stack = MaxStack::new();
  stack.push(5); 
  stack.push(1);
  stack.push(5);
  assert_eq!(stack.top(), 5);
  assert_eq!(stack.pop_max(), 5);
  assert_eq!(stack.top(), 1);
  assert_eq!(stack.peek_max(), 5);
  assert_eq!(stack.pop(), 1);
  assert_eq!(stack.top(), 5);

  let mut stack = MaxStack::new();
  stack.push(5); 
  stack.push(1);
  assert_eq!(stack.pop_max(), 5);
  assert_eq!(stack.peek_max(), 1);
}