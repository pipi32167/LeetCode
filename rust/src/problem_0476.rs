#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn find_complement(mut num: i32) -> i32 {
    
    let mut ret = vec![];
    while num > 0 {
      ret.push(num % 2);
      num /= 2;
    }
    ret.reverse();
    ret.iter()
      .fold(0, |acc, x| acc * 2 + if *x == 0 { 1 } else { 0 })
  }
}


#[test]
fn test() {
    
  assert_eq!(Solution::find_complement(5), 2);
  assert_eq!(Solution::find_complement(1), 0);
}