// use std::collections::HashSet;

// struct TwoSum {
//   nums: Vec<i32>,
//   rets: HashSet<i32>,
//   pos: usize,
// }

// /**
//  * `&self` means the method takes an immutable reference.
//  * If you need a mutable reference, change it to `&mut self` instead.
//  */
// impl TwoSum {
//   /** Initialize your data structure here. */
//   fn new() -> Self {
//     Self {
//       nums: Vec::new(),
//       rets: HashSet::new(),
//       pos: 0,
//     }
//   }

//   /** Add the number to an internal data structure.. */
//   fn add(&mut self, number: i32) {
//     self.nums.push(number);
//   }

//   /** Find if there exists any pair of numbers which sum is equal to the value. */
//   fn find(&mut self, value: i32) -> bool {
//     if self.pos < self.nums.len() {
//       for i in self.pos..self.nums.len() {
//         self.rets.extend(&self.nums[0..i].iter().map(|x| x + self.nums[i]).collect::<Vec<i32>>());
//         self.pos += 1;
//         if self.rets.contains(&value) {
//           return true
//         }
//       }
//       false
//     } else {
//       self.rets.contains(&value)
//     }
//   }
// }

use std::collections::HashMap;

struct TwoSum {
  nums: HashMap<i32, usize>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TwoSum {
  /** Initialize your data structure here. */
  fn new() -> Self {
    Self {
      nums: HashMap::new(),
    }
  }

  /** Add the number to an internal data structure.. */
  fn add(&mut self, number: i32) {
    let entry = self.nums.entry(number).or_insert(0);
    *entry += 1;
  }

  /** Find if there exists any pair of numbers which sum is equal to the value. */
  fn find(&self, value: i32) -> bool {
    for num in self.nums.keys() {
      if let Some(cnt) = self.nums.get(&(value - num)) {
        if value - num != *num {
          return true;
        } else if *cnt > 1 {
          return true;
        }
      }
    }
    false
  }
}


#[test]
fn test() {
  let mut ts = TwoSum::new();
  ts.add(1);
  ts.add(3);
  ts.add(5);
  assert!(ts.find(4));
  assert!(!ts.find(7));

  let mut ts = TwoSum::new();
  for i in 0..10000 {
    ts.add(i);
    if i % 100 == 0 {
      ts.find(i);
    }
  }
}
