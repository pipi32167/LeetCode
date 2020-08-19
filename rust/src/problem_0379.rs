use std::collections::{HashSet, VecDeque};
use std::iter::FromIterator;

#[derive(Debug)]
struct PhoneDirectory {
  free: VecDeque<i32>,
  used: HashSet<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl PhoneDirectory {
  /** Initialize your data structure here
  @param maxNumbers - The maximum numbers that can be stored in the phone directory. */
  fn new(max_numbers: i32) -> Self {
    Self {
      free: VecDeque::from_iter(0..max_numbers),
      used: HashSet::new(),
    }
  }

  /** Provide a number which is not assigned to anyone.
  @return - Return an available number. Return -1 if none is available. */
  fn get(&mut self) -> i32 {
    if let Some(ret) = self.free.pop_front() {
      self.used.insert(ret);
      ret
    } else {
      -1
    }
  }

  /** Check if a number is available or not. */
  fn check(&self, number: i32) -> bool {
    self.free.contains(&number)
  }

  /** Recycle or release a number. */
  fn release(&mut self, number: i32) {
    if self.used.contains(&number) {
      self.free.push_back(number);
      self.used.remove(&number);
    }
  }
}


#[test]
fn test_phone_directory() {
  let mut directory = PhoneDirectory::new(3);

  // 可以返回任意未分配的号码，这里我们假设它返回 0。
  println!("{}", directory.get());
  println!("{:?}", directory);
  
  // 假设，函数返回 1。
  println!("{}", directory.get());
  
  // 号码 2 未分配，所以返回为 true。
  println!("{}", directory.check(2));
  
  // 返回 2，分配后，只剩一个号码未被分配。
  println!("{}", directory.get());
  
  // 此时，号码 2 已经被分配，所以返回 false。
  println!("{}", directory.check(2));
  
  // 释放号码 2，将该号码变回未分配状态。
  directory.release(2);
  
  // 号码 2 现在是未分配状态，所以返回 true。
  println!("{}", directory.check(2));
  
}