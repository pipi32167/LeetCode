
struct Vector2D {
  data: Vec<i32>,
  pos: usize,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Vector2D {
  fn new(v: Vec<Vec<i32>>) -> Self {
    let mut data = vec![];
    for i in v {
      for j in i {
        data.push(j);
      }
    }
    Self { data: data, pos: 0 }    
  }

  fn next(&mut self) -> i32 {
    let ret = self.data[self.pos];
    self.pos += 1;
    ret
  }

  fn has_next(&self) -> bool {
    self.pos < self.data.len()
  }
}

// use std::iter::{Iterator, IntoIterator};

// type IntVec = Vec<i32>;

// struct Vector2D {
//   data: Vec<IntVec>,
//   iter1: Option<Box<dyn IntoIterator<Item = IntVec, IntoIter = dyn Iterator<Item = IntVec>>>>,
//   iter2: Option<Box<dyn IntoIterator<Item = i32, IntoIter = dyn Iterator<Item = i32>>>>,
// }

// /**
//  * `&self` means the method takes an immutable reference.
//  * If you need a mutable reference, change it to `&mut self` instead.
//  */
// impl Vector2D {
//   fn new(v: Vec<Vec<i32>>) -> Self {
    
//     Self { 
//       data: v, 
//       iter1: None,
//       iter2: None,
//     }    
//   }

//   fn next(&mut self) -> i32 {
//     if self.iter1.is_none() {
//       let iter = self.data.into_iter() as ;
//       let b = Some(Box::new(iter));
//       self.iter1 = b;
//     }
//     if self.iter2.is_none() {

//     }
//     0
//   }

//   fn has_next(&self) -> bool {
//     true
//   }
// }
