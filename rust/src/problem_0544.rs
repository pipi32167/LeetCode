use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn join<T: std::string::ToString>(a: T, b: T) -> String {
    "(".to_string() + &a.to_string() + &"," + &b.to_string() + &")"
  }

  pub fn find_contest_match(n: i32) -> String {
    let mut n = n;
    let mut ret: Vec<String> = Vec::from_iter(1..=n / 2)
      .into_iter()
      .map(|x| Self::join(x, n - x + 1))
      .collect();
    n >>= 1;
    while n > 1 {
      // println!("{:?}", ret);
      let mut ret2 = vec![];
      let len = ret.len();
      for i in 0..len/2 {
        ret2.push(Self::join(&ret[i], &ret[len - i - 1]));
      }
      n >>= 1;
      ret = ret2;
    }
    ret[0].clone()
  }
}

#[test]
fn test() {

  let expect = "(1,2)".to_string();
  let actual = Solution::find_contest_match(2);
  assert_eq!(actual, expect);
  let expect = "((1,4),(2,3))".to_string();
  let actual = Solution::find_contest_match(4);
  assert_eq!(actual, expect);
  let expect = "(((1,8),(4,5)),((2,7),(3,6)))".to_string();
  let actual = Solution::find_contest_match(8);
  assert_eq!(actual, expect);
}
