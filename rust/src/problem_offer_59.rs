use std::collections::VecDeque;

#[derive(Debug)]
struct MaxHeap {
  data: Vec<i32>,
}

impl MaxHeap {
  fn new() -> Self {
    MaxHeap { data: vec![0] }
  }

  fn siftup(&mut self, i: usize) {
    // println!("siftup: {:?}, {}", self.data, i);
    let mut i = i;
    while i != 1 {
      let p = i / 2;
      if self.data[p] > self.data[i] {
        break;
      }
      self.data.swap(i, p);
      i = p;
    }
  }
  
  fn siftdown(&mut self, i: usize) {
    // println!("siftdown: {:?}, {}", self.data, i);
    let mut i = i;
    loop {
      let mut c = i * 2;
      if c >= self.data.len() {
        break;
      }
      if c + 1 < self.data.len() && self.data[c + 1] > self.data[c] {
        c += 1;
      }
      if self.data[i] > self.data[c] {
        break;
      }
      self.data.swap(i, c);
      i = c;
    }
  }

  fn search(&self, val: i32, i: usize) -> Option<i32> {
    // println!("search: val:{}, i:{}, data:{:?}", val, i, self.data);
    if i >= self.data.len() {
      return None;
    }
    
    if val > self.data[i] {
      return None;
    }

    if val == self.data[i] {
      return Some(i as i32);
    }

    if i * 2 >= self.data.len() {
      return None;
    }
    match self.search(val, i * 2) {
      Some(idx) => Some(idx),
      None => self.search(val, i * 2 + 1),
    }
  }

  fn pop(&mut self) -> Option<i32> {
    match Option::Some(self.data.len()) {
      Some(len) if len <= 1 => Some(-1),
      Some(len) if len == 2 => self.data.pop(),
      _ => {
        let last_idx = self.data.len() - 1;
        self.data.swap(1, last_idx);
        let ret = self.data.pop();
        self.siftdown(1);
        ret
      }
    }
  }

  fn push(&mut self, val: i32) {
    self.data.push(val);
    self.siftup(self.data.len() - 1);
  }

  fn remove(&mut self, val: i32) {
    if let Some(i) = self.search(val, 1) {
      // println!("remove: i:{}, val:{}", i, val);
      let i = i as usize;
      self.data[i] = std::i32::MAX;
      self.siftup(i);
      self.pop();
    }
  }

  fn peek(&self) -> Option<i32> {
    if self.data.len() > 1 {
      Some(self.data[1])
    } else {
      None
    }
  }
}

#[derive(Debug)]
struct MaxQueue {
  data: VecDeque<i32>,
  max_heap: MaxHeap,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MaxQueue {
  fn new() -> Self {
    MaxQueue {
      data: VecDeque::new(),
      max_heap: MaxHeap::new(),
    }
  }

  fn max_value(&self) -> i32 {
    self.max_heap.peek().unwrap_or(-1)
  }

  fn push_back(&mut self, value: i32) {
    self.data.push_back(value);
    self.max_heap.push(value);
    assert_eq!(self.data.len() + 1, self.max_heap.data.len());
  }

  fn pop_front(&mut self) -> i32 {
    
    if let Some(x) = self.data.pop_front() {
      self.max_heap.remove(x);
      // println!("pop_front: {:?}, {}", self, x);
      assert_eq!(self.data.len() + 1, self.max_heap.data.len());
      x
    } else {
      -1
    }
  }
}
mod problem_offer_59 {}

#[test]
fn test_max_queue() {
  use problem_offer_59::MaxQueue;

  let mut queue = MaxQueue::new();
  queue.push_back(1);
  queue.push_back(2);
  queue.push_back(1);
  // println!("{:?}", queue);
  assert_eq!(queue.max_value(), 2);
  // println!("{:?}", queue);
  assert_eq!(queue.pop_front(), 1);
  // println!("{:?}", queue);
  assert_eq!(queue.max_value(), 2);
  // println!("{:?}", queue);
  assert_eq!(queue.pop_front(), 2);
  // println!("{:?}", queue);
  assert_eq!(queue.max_value(), 1);

  let mut queue = MaxQueue::new();
  assert_eq!(queue.pop_front(), -1);
  assert_eq!(queue.max_value(), -1);

  let mut queue = MaxQueue::new();

  assert_eq!(queue.max_value(), -1);
  assert_eq!(queue.pop_front(), -1);
  assert_eq!(queue.max_value(), -1);
  queue.push_back(46);
  assert_eq!(queue.max_value(), 46);
  assert_eq!(queue.pop_front(), 46);
  assert_eq!(queue.max_value(), -1);
  assert_eq!(queue.pop_front(), -1);
  queue.push_back(868);
  assert_eq!(queue.pop_front(), 868);
  assert_eq!(queue.pop_front(), -1);
  assert_eq!(queue.pop_front(), -1);
  queue.push_back(525);
  assert_eq!(queue.pop_front(), 525);
  assert_eq!(queue.max_value(), -1);
  assert_eq!(queue.pop_front(), -1);
  assert_eq!(queue.max_value(), -1);
  queue.push_back(123);
  queue.push_back(646);
  assert_eq!(queue.max_value(), 646);
  queue.push_back(229);
  assert_eq!(queue.max_value(), 646);
  assert_eq!(queue.max_value(), 646);
  assert_eq!(queue.max_value(), 646);
  queue.push_back(871);
  assert_eq!(queue.pop_front(), 123);
  assert_eq!(queue.max_value(), 871);
  queue.push_back(285);
  assert_eq!(queue.max_value(), 871);
  assert_eq!(queue.max_value(), 871);
  assert_eq!(queue.max_value(), 871);
  assert_eq!(queue.pop_front(), 646);
  queue.push_back(45);
  queue.push_back(140);
  queue.push_back(837);
  queue.push_back(545);
  assert_eq!(queue.pop_front(), 229);
  assert_eq!(queue.pop_front(), 871);
  assert_eq!(queue.max_value(), 837);
  assert_eq!(queue.pop_front(), 285);
  assert_eq!(queue.pop_front(), 45);
  assert_eq!(queue.max_value(), 837);
  queue.push_back(561);
  queue.push_back(237);
  assert_eq!(queue.pop_front(), 140);
  queue.push_back(633);
  queue.push_back(98);
  queue.push_back(806);
  queue.push_back(717);
  assert_eq!(queue.pop_front(), 837);
  assert_eq!(queue.max_value(), 806);
  queue.push_back(186);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.pop_front(), 545);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.max_value(), 806);
  queue.push_back(268);
  assert_eq!(queue.pop_front(), 561);
  queue.push_back(29);
  assert_eq!(queue.pop_front(), 237);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.max_value(), 806);
  assert_eq!(queue.max_value(), 806);
  queue.push_back(866);
  assert_eq!(queue.pop_front(), 633);
  queue.push_back(239);
  queue.push_back(3);
  queue.push_back(850);
  assert_eq!(queue.pop_front(), 98);
  assert_eq!(queue.max_value(), 866);
  assert_eq!(queue.pop_front(), 806);
  assert_eq!(queue.max_value(), 866);
  assert_eq!(queue.max_value(), 866);
  assert_eq!(queue.max_value(), 866);
  assert_eq!(queue.pop_front(), 717);
  queue.push_back(310);
  assert_eq!(queue.pop_front(), 186);
  queue.push_back(674);
  queue.push_back(770);
  assert_eq!(queue.pop_front(), 268);
  queue.push_back(525);
  assert_eq!(queue.pop_front(), 29);
  queue.push_back(425);
  assert_eq!(queue.pop_front(), 866);
  assert_eq!(queue.pop_front(), 239);
  queue.push_back(720);
  assert_eq!(queue.pop_front(), 3);
  assert_eq!(queue.pop_front(), 850);
  assert_eq!(queue.pop_front(), 310);
  queue.push_back(373);
  queue.push_back(411);
  // println!("{:?}", queue);
  assert_eq!(queue.max_value(), 770);
  queue.push_back(831);
  assert_eq!(queue.pop_front(), 674);
  queue.push_back(765);
  queue.push_back(701);
  assert_eq!(queue.pop_front(), 770);
}

#[test]
fn test_max_heap() {
  let mut heap = MaxHeap::new();
  heap.push(5);
  heap.push(6);
  heap.push(2);
  heap.push(3);
  // println!("{:?}", heap.data);
  assert_eq!(heap.peek(), Some(6));
  heap.pop();
  // println!("{:?}", heap.data);
  assert_eq!(heap.peek(), Some(5));
  heap.pop();
  // println!("{:?}", heap.data);
  assert_eq!(heap.peek(), Some(3));
  heap.pop();
  // println!("{:?}", heap.data);
  assert_eq!(heap.peek(), Some(2));
  heap.pop();
  // println!("{:?}", heap.data);
  assert_eq!(heap.peek(), None);
}
