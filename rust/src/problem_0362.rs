use std::collections::HashMap;

struct HitCounter {
  data: HashMap<i32, usize>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl HitCounter {

    /** Initialize your data structure here. */
    fn new() -> Self {
      Self {
        data: HashMap::new()
      }
    }
    
    /** Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). */
    fn hit(&mut self, timestamp: i32) {
      let entry = self.data.entry(timestamp).or_insert(0);
      *entry += 1;
    }
    
    /** Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). */
    fn get_hits(&self, timestamp: i32) -> i32 {

      let start = timestamp - 300 + 1;
      let end = timestamp;
      // println!("{}..{}", start, end);
      // println!("{:?}", self.data);
      let mut ret = 0;
      if self.data.len() > 300 {
        for i in start..=end {
          let entry = self.data.get(&i).unwrap_or(&0);
          ret += *entry;
        }
      } else {

        for entry in self.data.iter() {
          if *entry.0 >= start && *entry.0 <= end {
            ret += entry.1;
          }
        }
      }
      ret as i32
    }
}


#[test]
fn test_hit_counter() {
  let mut counter = HitCounter::new();
  // 在时刻 1 敲击一次。
  counter.hit(1);
  // 在时刻 2 敲击一次。
  counter.hit(2);
  // 在时刻 3 敲击一次。
  counter.hit(3);
  // 在时刻 4 统计过去 5 分钟内的敲击次数, 函数返回 3 。
  assert_eq!(counter.get_hits(4), 3);
  // 在时刻 300 敲击一次。
  counter.hit(300);
  // 在时刻 300 统计过去 5 分钟内的敲击次数，函数返回 4 。
  assert_eq!(counter.get_hits(300), 4);
  // 在时刻 301 统计过去 5 分钟内的敲击次数，函数返回 3 。
  assert_eq!(counter.get_hits(301), 3); 

}