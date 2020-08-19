#[derive(Debug)]
struct Solution {
}

impl Solution {
    pub fn calculate_time(keyboard: String, word: String) -> i32 {
      
      let mut before_idx = 0;
      let mut ret = 0;
      for c in word.chars() {
        if let Some(idx) = keyboard.find(c) {
          ret += if idx > before_idx { idx - before_idx } else { before_idx - idx } as i32;
          before_idx = idx;
        }
      }
      ret
    }
}

#[test]
fn test() {
    
}