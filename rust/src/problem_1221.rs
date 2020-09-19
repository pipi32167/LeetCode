#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn balanced_string_split(s: String) -> i32 {
    let mut cnt = 0;
    let mut ret = 0;
    for c in s.chars() {
      cnt += if c == 'L' { 1 } else { -1 };
      ret += if cnt == 0 { 1 } else { 0 };
    }
    ret
  }
}
