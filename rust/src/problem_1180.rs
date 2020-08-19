#[derive(Debug)]
struct Solution {

}

impl Solution {
  pub fn count_letters(s: String) -> i32 {
    let mut ret = 0;
    let mut before_idx = 0;
    let chars: Vec<char> = s.chars().collect();
    for i in 1..s.len() {
      if chars[i - 1] != chars[i] {
        let len = i - before_idx;
        ret += len * (len + 1) / 2;
        before_idx = i;
      }
    }
    let len = s.len() - before_idx;
    ret += len * (len + 1) / 2;
    ret as i32
  }
}

#[test]
fn test() {
    
  assert_eq!(Solution::count_letters("aaaba".to_owned()), 8);
  assert_eq!(Solution::count_letters("aaaaaaaaaa".to_owned()), 55);
}