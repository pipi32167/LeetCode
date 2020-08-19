use std::collections::{HashSet, HashMap};

#[derive(Debug)]
struct Solution {}

impl Solution {

  fn solve(n: i32, memo: &mut HashMap<i32, Vec<Vec<i32>>>, memo2: &mut HashSet<Vec<i32>>) -> Vec<Vec<i32>> {
    if memo.contains_key(&n) {
      // println!("hit: {}", n);
      return memo.get(&n).unwrap().clone();
    }
    let max = (n as f32).sqrt() as i32;
    let mut rets = vec![];
    for i in 2..=max {
      if n % i != 0 {
        continue;
      }
      let j = n / i;
      let ret = vec![i, j];
      rets.push(ret.clone());
      memo2.insert(ret);
      let factors = Self::solve(j, memo, memo2);
      for factor in factors {
        let mut ret = vec![i];
        ret.extend(factor);
        ret.sort();
        if !memo2.contains(&ret) {
          rets.push(ret.clone());
          memo2.insert(ret);
        }
      }
    }
    // println!("miss: {}, {:?}", n, memo);
    memo.insert(n, rets.clone());
    rets
  }
  pub fn get_factors(n: i32) -> Vec<Vec<i32>> {
    let mut memo = HashMap::new();
    let mut memo2 = HashSet::new();
    Self::solve(n, &mut memo, &mut memo2)
  }
}

#[test]
fn test() {
  let expect: Vec<Vec<i32>> = vec![];
  let actual = Solution::get_factors(1);
  assert_eq!(actual, expect);
  let expect: Vec<Vec<i32>> = vec![];
  let actual = Solution::get_factors(37);
  assert_eq!(actual, expect);
  let expect = vec_of_vec![[2, 6], [2, 2, 3], [3, 4]];
  let actual = Solution::get_factors(12);
  assert_eq!(actual, expect);
  let expect = vec_of_vec![
    [2, 16],
    [2, 2, 8],
    [2, 2, 2, 4],
    [2, 2, 2, 2, 2],
    [2, 4, 4],
    [4, 8]
  ];
  let actual = Solution::get_factors(32);
  assert_eq!(actual, expect);
  
  let n = (2..10).fold(1, |acc, x| acc * x);
  println!("{}", n);
  let actual = Solution::get_factors(n);
  // assert_eq!(actual, expect);
}
