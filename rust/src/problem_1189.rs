use std::collections::HashMap;
use std::i32;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn max_number_of_balloons(text: String) -> i32 {
    let collect = |s: String| -> HashMap<char, usize> {
      s.chars().fold(HashMap::new(), |mut acc, x| {
        let en = acc.entry(x).or_insert(0);
        *en += 1;
        acc
      })
    };

    let ballon = collect("balloon".to_owned());
    let text = collect(text);
    // println!("{:?}", ballon);
    // println!("{:?}", text);
    let mut min = i32::MAX;
    for (c, cnt1) in ballon {
      let cnt2 = text.get(&c).unwrap_or(&0);
      // println!("{} -> {}, {}, {}", c, cnt1, *cnt2, *cnt2 / cnt1);
      if *cnt2 == 0 || cnt1 > *cnt2 {
        min = 0;
        break;
      }
      min = min.min((*cnt2 / cnt1) as i32);
    }
    min
  }
}


#[test]
fn test() {
  assert_eq!(Solution::max_number_of_balloons("ballon".to_owned()), 0);
  assert_eq!(Solution::max_number_of_balloons("nlaebolko".to_owned()), 1);
  assert_eq!(Solution::max_number_of_balloons("loonbalxballpoon".to_owned()), 2);
  assert_eq!(Solution::max_number_of_balloons("leetcode".to_owned()), 0);
}