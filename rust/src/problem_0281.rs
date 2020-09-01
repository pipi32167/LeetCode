
#[derive(Debug)]
struct ZigzagIterator {
  data1: Vec<i32>,
  data2: Vec<i32>,
  curr: usize,
}

impl ZigzagIterator {
    
  fn new(data1: Vec<i32>, data2: Vec<i32>) -> Self {
    ZigzagIterator { 
      data1: data1,
      data2: data2,
      curr: 0 
    }
  }
  fn next(&mut self) -> i32 {

    let ret;
    if self.curr >= self.data1.len() * 2 {
      ret = self.data2[self.curr - self.data1.len()]
    } else if self.curr >= self.data2.len() * 2 {
      ret = self.data1[self.curr - self.data2.len()]
    } else {
      ret = if self.curr % 2 == 0 { 
        self.data1[self.curr / 2]
      } else { 
        self.data2[self.curr / 2]
      };
    }
    self.curr += 1;
    ret
  }
  
  fn has_next(&self) -> bool {
    self.curr < self.data1.len() + self.data2.len()
  }
}


#[test]
fn test() {
  let v1 = vec![1,2];
  let v2 = vec![3,4,5,6];
  let mut iter = ZigzagIterator::new(v1, v2);
  let expect = vec![1,3,2,4,5,6];
  let mut actual = vec![];
  while iter.has_next() {
    actual.push(iter.next());
  }
  assert_eq!(actual, expect);
}