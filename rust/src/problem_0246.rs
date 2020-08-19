use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn is_strobogrammatic(num: String) -> bool {
    let map: HashMap<char, char> =
      vec![('0', '0'), ('1', '1'), ('6', '9'), ('8', '8'), ('9', '6')]
        .into_iter()
        .collect();
    // println!("{:?}", map);

    let mut ret = String::new();
    for c in num.chars() {
      // println!("{}", c);
      if !map.contains_key(&c) {
        return false;
      }
      ret.push(map[&c]);
    }

    unsafe {
      ret.as_bytes_mut().reverse();
    }
    // println!("{}", ret);
    ret == num
  }
}

#[test]
fn test_is_strobogrammatic() {
  assert!(Solution::is_strobogrammatic("69".to_string()));
  assert!(Solution::is_strobogrammatic("88".to_string()));
  assert!(!Solution::is_strobogrammatic("962".to_string()));
  assert!(Solution::is_strobogrammatic("1".to_string()));
}
