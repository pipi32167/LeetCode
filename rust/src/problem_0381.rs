use rand::{thread_rng, Rng};
use std::collections::HashMap;
use util::collect_as_hashmap;

struct RandomizedCollection {
  data: HashMap<i32, usize>,
  size: usize,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedCollection {
  /** Initialize your data structure here. */
  fn new() -> Self {
    Self {
      data: HashMap::new(),
      size: 0,
    }
  }

  /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
  fn insert(&mut self, val: i32) -> bool {
    let entry = self.data.entry(val).or_insert(0);
    *entry += 1;
    self.size += 1;
    *entry == 1
  }

  /** Removes a value from the collection. Returns true if the collection contained the specified element. */
  fn remove(&mut self, val: i32) -> bool {
    if let Some(cnt) = self.data.get_mut(&val) {
      *cnt -= 1;
      if *cnt == 0 {
        self.data.remove_entry(&val);
      }
      self.size -= 1;
      true
    } else {
      false
    }
  }

  /** Get a random element from the collection. */
  fn get_random(&self) -> i32 {
    let num: usize = thread_rng().gen_range(0, self.size);
    let mut tmp = 0;
    let mut ret = -1;
    for (k, v) in &self.data {
      tmp += *v;
      if tmp > num {
        ret = *k;
        break;
      }
    }
    ret
  }
}

#[test]
fn test() {
    
  let mut r = RandomizedCollection::new();
  assert!(r.insert(1));
  assert!(!r.insert(1));
  assert!(r.insert(2));

  let print_ratio = |v: Vec<i32>| {
    let ret = collect_as_hashmap(&v);
    for (k, cnt) in ret {
      println!("{}: {}", k, cnt as f32 / v.len() as f32);
    }
  };
  let mut v = vec![];
  for _i in 0..1000 {
    v.push(r.get_random());
  }
  print_ratio(v);

  assert!(r.remove(1));
  let mut v = vec![];
  for _i in 0..1000 {
    v.push(r.get_random());
  }
  print_ratio(v);
}